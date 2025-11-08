import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ["customer", "hallOwner", "serviceProvider", "admin"],
    required: true,
  },
  refId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: "roleModel",
  },
  roleModel: {
    type: String,
    required: true,
    enum: ["Customer", "Hall", "ServiceProvider", "Admin"],
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  otp: String,     
  otpExpiry: Date,
  password: String, 
  refreshToken: String,
}, { timestamps: true });

export const Auth = mongoose.model("Auth", authSchema);
