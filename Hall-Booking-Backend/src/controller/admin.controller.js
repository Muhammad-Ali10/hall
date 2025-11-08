import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Hall } from "../models/hall.model.js";
import { ServiceProvider } from "../models/serviceprovider.model.js";

export const pendingHalls = asyncHandler(async (req, res) => {
  const halls = await Hall.find({ status: "pending" }).select("-password -refreshToken");
  res.json(new ApiResponse(200, halls, "Pending halls"));
});

export const setHallStatus = asyncHandler(async (req, res) => {
  const { hallId, action } = req.body;
  if (!hallId || !["approve","reject"].includes(action)) throw new ApiError(400, "Invalid");
  const status = action === "approve" ? "approved" : "rejected";
  const hall = await Hall.findByIdAndUpdate(hallId, { status }, { new: true }).select("-password -refreshToken");
  if (!hall) throw new ApiError(404, "Hall not found");
  // TODO: send email/notification
  res.json(new ApiResponse(200, hall, `Hall ${status}`));
});

export const pendingProviders = asyncHandler(async (req, res) => {
  const providers = await ServiceProvider.find({ status: "pending" }).select("-password -refreshToken");
  res.json(new ApiResponse(200, providers, "Pending providers"));
});

export const setProviderStatus = asyncHandler(async (req, res) => {
  const { providerId, action } = req.body;
  if (!providerId || !["approve","reject"].includes(action)) throw new ApiError(400, "Invalid");
  const status = action === "approve" ? "approved" : "rejected";
  const provider = await ServiceProvider.findByIdAndUpdate(providerId, { status }, { new: true }).select("-password -refreshToken");
  if (!provider) throw new ApiError(404, "Provider not found");
  res.json(new ApiResponse(200, provider, `Provider ${status}`));
});
