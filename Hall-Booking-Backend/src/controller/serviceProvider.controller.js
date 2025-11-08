import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ServiceProvider } from "../models/serviceprovider.model.js";
import { Service } from "../models/service.model.js";
import { Auth } from "../models/auth.model.js";
import { generateTokens } from "../utils/token.js";
import env from "../config/env.js";
import bcrypt from "bcrypt";

// Register SP
export const registerSP = asyncHandler(async (req, res) => {
  const { companyName, email, ownerPhone, password, address } = req.body;
  if (!companyName || !email || !ownerPhone || !password || !address) throw new ApiError(400, "Missing fields");
  const exists = await ServiceProvider.findOne({ $or: [{ companyName }, { email }] });
  if (exists) throw new ApiError(400, "Provider exists");
  const provider = await ServiceProvider.create({ companyName, email, ownerPhone, password, address, status: "pending" });
  await Auth.create({ role: "serviceProvider", roleModel: "ServiceProvider", refId: provider._id, email, password });
  const created = await ServiceProvider.findById(provider._id).select("-password -refreshToken");
  res.status(201).json(new ApiResponse(201, created, "Provider registered, wait admin approval"));
});

// Login SP
export const loginSP = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const provider = await ServiceProvider.findOne({ email });
  if (!provider) throw new ApiError(400, "Invalid credentials");
  const ok = await provider.isPasswordCorrect(password);
  if (!ok) throw new ApiError(400, "Invalid credentials");
  if (provider.status !== "approved") throw new ApiError(403, "Not approved yet");
  const { accessToken, refreshToken, hashedRefresh } = await generateTokens({ _id: provider._id, role: "serviceProvider" });
  provider.refreshToken = hashedRefresh;
  await provider.save();
  res.cookie("accessToken", accessToken, { httpOnly: true, secure: env.nodeEnv === "production" });
  res.cookie("refreshToken", refreshToken, { httpOnly: true, secure: env.nodeEnv === "production" });
  const profile = await ServiceProvider.findById(provider._id).select("-password -refreshToken");
  res.json(new ApiResponse(200, { profile, accessToken }, "Logged in"));
});

// Service CRUD (simple)
export const addService = asyncHandler(async (req, res) => {
  const { title, description, price, category } = req.body;
  if (!title || !price) throw new ApiError(400, "Missing fields");
  const service = await Service.create({ providerId: req.user._id, title, description, price, category });
  res.status(201).json(new ApiResponse(201, service, "Service created"));
});

export const listServicesByProvider = asyncHandler(async (req, res) => {
  const services = await Service.find({ providerId: req.user._id });
  res.json(new ApiResponse(200, services, "OK"));
});
