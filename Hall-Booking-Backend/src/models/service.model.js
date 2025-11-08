import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  providerId: { type: mongoose.Schema.Types.ObjectId, ref: "ServiceProvider", required: true },
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  images: [{ url: String, alt: String }],
  category: { type: String }
}, { timestamps: true });

serviceSchema.index({ title: "text", description: "text" });

export const Service = mongoose.model("Service", serviceSchema);
