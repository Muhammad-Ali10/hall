import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";
import env from "../config/env.js";
import { Admin } from "../models/admin.model.js";
import { Hall } from "../models/hall.model.js";
import { ServiceProvider } from "../models/serviceprovider.model.js";
import { Customer } from "../models/customer.model.js";

export const protect = async (req, res, next) => {
  try {
    const token = req.cookies?.accessToken || (req.headers.authorization && req.headers.authorization.split(" ")[1]);
    if (!token) throw new ApiError(401, "Not authenticated");
    const decoded = jwt.verify(token, env.accessTokenSecret);
    const id = decoded._id;
    let user = await Admin.findById(id) || await Hall.findById(id) || await ServiceProvider.findById(id) || await Customer.findById(id);
    if (!user) throw new ApiError(401, "User not found");
    req.user = user;
    req.user.role = decoded.role || req.user.role;
    next();
  } catch (err) {
    next(new ApiError(401, "Unauthorized"));
  }
};
