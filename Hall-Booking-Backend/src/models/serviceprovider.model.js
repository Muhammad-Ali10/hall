import mongoose from "mongoose";
import bcrypt from "bcrypt";

const spSchema = new mongoose.Schema({
  companyName: { type: String, required: true, unique: true },
  ownerPhone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  documents: [{ name: String, url: String }],
  portfolio: [{ url: String, altText: String }],
  status: { type: String, enum: ["pending","approved","rejected","suspended"], default: "pending" },
  password: { type: String, required: true },
  refreshToken: { type: String },
  role: { type: String, default: "serviceProvider" }
}, { timestamps: true });

spSchema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

spSchema.methods.isPasswordCorrect = function(password) {
  return bcrypt.compare(password, this.password);
};

export const ServiceProvider = mongoose.model("ServiceProvider", spSchema);
