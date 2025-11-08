import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { City } from "../models/city.model.js";

export const createCity = asyncHandler(async (req, res) => {
  const { name, state, country } = req.body;
  const city = await City.create({ name, state, country });
  res.status(201).json(new ApiResponse(201, city, "City created"));
});

export const listCities = asyncHandler(async (req, res) => {
  const cities = await City.find();
  res.json(new ApiResponse(200, cities, "OK"));
});
