import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
  hallId: { type: mongoose.Schema.Types.ObjectId, ref: "Hall", required: true },
  eventDate: { type: Date, required: true },
  attendees: { type: Number, required: true },
  services: [{ serviceId: { type: mongoose.Schema.Types.ObjectId, ref: "Service" }, price: Number }],
  status: { type: String, enum: ["pending","confirmed","cancelled"], default: "pending" },
  paymentId: { type: mongoose.Schema.Types.ObjectId, ref: "Payment" },
}, { timestamps: true });

export const Booking = mongoose.model("Booking", bookingSchema);
