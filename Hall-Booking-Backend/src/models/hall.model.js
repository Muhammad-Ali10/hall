import mongoose from "mongoose";
import bcrypt from "bcrypt";

const hallSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true, trim: true, lowercase: true },
  hallName: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, match: [/^\S+@\S+\.\S+$/, "Invalid email"] },
  hallPhone: { type: String, required: true, trim: true },
  hallLocation: { type: String, trim: true },
  gstNumber: { type: String, trim: true, uppercase: true },
  password: { type: String, required: true },
  hallDescription: { type: String, default: "This is a hall" },
  status: { type: String, enum: ["pending","approved","rejected"], default: "pending" },
  capacity: { type: Number, min: 10, default: 100 },
  price: { type: Number, min: 0, default: 1000 },
  avatar: { type: String },
  coverImage: { type: String },
  images: [{ url: String }],
  city: { type: mongoose.Schema.Types.ObjectId, ref: "City" },
  refreshToken: { type: String },
  role: { type: String, default: "hallOwner" }
}, { timestamps: true });

hallSchema.index({ hallName: 1, city: 1 }, { unique: true });

hallSchema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

hallSchema.methods.isPasswordCorrect = function(password) {
  return bcrypt.compare(password, this.password);
};

export const Hall = mongoose.model("Hall", hallSchema);
