import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Hall } from "../models/hall.model.js";
import { Auth } from "../models/auth.model.js";
import { uploadToCloudinary } from "../utils/cloudinary.js";
import { generateTokens } from "../utils/token.js";
import bcrypt from "bcrypt";
import env from "../config/env.js";

export const registerHall = asyncHandler(async (req, res) => {
  const { userName, hallName, email, hallPhone, hallLocation, password } = req.body;
  if (!userName || !hallName || !email || !hallPhone || !hallLocation || !password) throw new ApiError(400, "All fields required");
  const exists = await Hall.findOne({ $or: [{ userName }, { email }] });
  if (exists) throw new ApiError(400, "Hall already exists");
  const hall = await Hall.create({ userName, hallName, email, hallPhone, hallLocation, password, status: "pending" });
  // create auth mapping
  await Auth.create({ role: "hallOwner", roleModel: "Hall", refId: hall._id, email, password });
  const created = await Hall.findById(hall._id).select("-password -refreshToken");
  res.status(201).json(new ApiResponse(201, created, "Hall registered, waiting admin approval"));
});

export const loginHall = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) throw new ApiError(400, "All fields required");
  const hall = await Hall.findOne({ email });
  if (!hall) throw new ApiError(400, "Invalid credentials");
  const isPass = await hall.isPasswordCorrect(password);
  if (!isPass) throw new ApiError(400, "Invalid credentials");
  if (hall.status !== "approved") throw new ApiError(403, "Hall not approved by admin yet");
  const { accessToken, refreshToken, hashedRefresh } = await generateTokens({ _id: hall._id, role: "hallOwner" });
  hall.refreshToken = hashedRefresh;
  await hall.save();
  res.cookie("accessToken", accessToken, { httpOnly: true, secure: env.nodeEnv === "production" });
  res.cookie("refreshToken", refreshToken, { httpOnly: true, secure: env.nodeEnv === "production" });
  const profile = await Hall.findById(hall._id).select("-password -refreshToken");
  res.json(new ApiResponse(200, { profile, accessToken }, "Login successful"));
});

export const getMyProfile = asyncHandler(async (req, res) => {
  const hall = await Hall.findById(req.user._id).select("-password -refreshToken");
  res.json(new ApiResponse(200, hall, "OK"));
});

export const updateDetails = asyncHandler(async (req, res) => {
  const { hallName, hallPhone, hallLocation, hallDescription, capacity, price } = req.body;
  const hall = await Hall.findByIdAndUpdate(req.user._id, { hallName, hallPhone, hallLocation, hallDescription, capacity, price }, { new: true }).select("-password -refreshToken");
  res.json(new ApiResponse(200, hall, "Updated"));
});

export const uploadAvatar = asyncHandler(async (req, res) => {
  if (!req.file) throw new ApiError(400, "Avatar required");
  const uploaded = await uploadToCloudinary(req.file.path, "halls/avatars");
  const hall = await Hall.findByIdAndUpdate(req.user._id, { avatar: uploaded.url }, { new: true }).select("-password -refreshToken");
  res.json(new ApiResponse(200, hall, "Avatar updated"));
});

export const uploadCover = asyncHandler(async (req, res) => {
  if (!req.file) throw new ApiError(400, "Cover required");
  const uploaded = await uploadToCloudinary(req.file.path, "halls/covers");
  const hall = await Hall.findByIdAndUpdate(req.user._id, { coverImage: uploaded.url }, { new: true }).select("-password -refreshToken");
  res.json(new ApiResponse(200, hall, "Cover updated"));
});

export const listHalls = asyncHandler(async (req, res) => {
  const { city, minPrice, maxPrice, capacity, q, page = 1, limit = 20 } = req.query;
  const filter = { status: "approved" };
  if (city) filter.city = city;
  if (minPrice || maxPrice) filter.price = {};
  if (minPrice) filter.price.$gte = Number(minPrice);
  if (maxPrice) filter.price.$lte = Number(maxPrice);
  if (capacity) filter.capacity = { $gte: Number(capacity) };
  if (q) filter.$text = { $search: q };
  const skip = (Number(page) - 1) * Number(limit);
  const halls = await Hall.find(filter).skip(skip).limit(Number(limit)).select("-password -refreshToken");
  const total = await Hall.countDocuments(filter);
  res.json(new ApiResponse(200, { items: halls, total, page: Number(page), limit: Number(limit) }, "Halls list"));
});
