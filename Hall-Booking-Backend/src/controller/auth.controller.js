import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Admin } from "../models/admin.model.js";
import { Hall } from "../models/hall.model.js";
import { ServiceProvider } from "../models/serviceprovider.model.js";
import { Customer } from "../models/customer.model.js";
import { generateTokens, verifyRefreshToken } from "../utils/token.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import env from "../config/env.js";
import { Auth } from "../models/auth.model.js";

// Helper to find profile model by role
const findProfileByRole = async (role, id) => {
  switch (role) {
    case "admin": return Admin.findById(id).select("-password -refreshToken");
    case "hallOwner": return Hall.findById(id).select("-password -refreshToken");
    case "serviceProvider": return ServiceProvider.findById(id).select("-password -refreshToken");
    case "customer": return Customer.findById(id).select("-password -refreshToken");
    default: return null;
  }
};

export const registerAuth = asyncHandler(async (req, res) => {
  // This endpoint is optional: commonly registration done via specific model endpoints (hall, sp, customer)
  const { role, roleModel, refId, email, phone, password } = req.body;
  if (!role || !roleModel || !refId || !password) throw new ApiError(400, "Missing fields");
  const existing = await Auth.findOne({ $or: [{ email }, { phone }] });
  if (existing) throw new ApiError(400, "Auth already exists");
  const hashed = await bcrypt.hash(password, 10);
  const auth = await Auth.create({ role, roleModel, refId, email, phone, password: hashed });
  res.status(201).json(new ApiResponse(201, auth, "Auth mapping created"));
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) throw new ApiError(400, "Missing fields");
  const auth = await Auth.findOne({ email });
  if (!auth) throw new ApiError(404, "User not registered");
  const valid = await bcrypt.compare(password, auth.password || "");
  if (!valid) throw new ApiError(400, "Invalid credentials");
  const profile = await findProfileByRole(auth.role, auth.refId);
  const { accessToken, refreshToken, hashedRefresh } = await generateTokens({ _id: auth.refId, role: auth.role });
  auth.refreshToken = hashedRefresh;
  await auth.save();
  const cookieOptions = { httpOnly: true, secure: env.nodeEnv === "production", sameSite: "Strict" };
  res.cookie("accessToken", accessToken, cookieOptions);
  res.cookie("refreshToken", refreshToken, cookieOptions);
  res.json(new ApiResponse(200, { profile, accessToken }, "Logged in"));
});

export const refresh = asyncHandler(async (req, res) => {
  const incoming = req.cookies?.refreshToken || req.body?.refreshToken;
  if (!incoming) throw new ApiError(401, "No refresh token");
  try {
    const decoded = verifyRefreshToken(incoming); // will throw if invalid
    const auth = await Auth.findOne({ refId: decoded._id });
    if (!auth) throw new ApiError(401, "Auth not found");
    const match = await bcrypt.compare(incoming, auth.refreshToken || "");
    if (!match) throw new ApiError(403, "Refresh token mismatch");
    const { accessToken, refreshToken, hashedRefresh } = await generateTokens({ _id: auth.refId, role: auth.role });
    auth.refreshToken = hashedRefresh;
    await auth.save();
    res.cookie("accessToken", accessToken, { httpOnly: true, secure: env.nodeEnv === "production" });
    res.cookie("refreshToken", refreshToken, { httpOnly: true, secure: env.nodeEnv === "production" });
    res.json(new ApiResponse(200, { accessToken }, "Tokens refreshed"));
  } catch (err) {
    throw new ApiError(401, "Invalid refresh token");
  }
});

export const logout = asyncHandler(async (req, res) => {
  // Clear refresh token mapping if auth found
  const incoming = req.cookies?.refreshToken;
  if (incoming) {
    try {
      const decoded = verifyRefreshToken(incoming);
      await Auth.findOneAndUpdate({ refId: decoded._id }, { refreshToken: undefined });
    } catch (e) {
      // ignore
    }
  }
  res.clearCookie("accessToken").clearCookie("refreshToken");
  res.json(new ApiResponse(200, {}, "Logged out"));
});
