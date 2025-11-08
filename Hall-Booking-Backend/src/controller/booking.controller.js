import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Booking } from "../models/booking.model.js";
import { Hall } from "../models/hall.model.js";
import { Payment } from "../models/payment.model.js";

// Create booking (customer)
export const createBooking = asyncHandler(async (req, res) => {
  const { hallId, eventDate, attendees, services = [] } = req.body;
  if (!hallId || !eventDate || !attendees) throw new ApiError(400, "Missing fields");
  const hall = await Hall.findById(hallId);
  if (!hall || hall.status !== "approved") throw new ApiError(400, "Hall not available");
  // create booking pending
  const booking = await Booking.create({ customerId: req.user._id, hallId, eventDate, attendees, services, status: "pending" });
  // compute total and 50% advance
  const servicesTotal = services.reduce((s, it) => s + (it.price || 0), 0);
  const total = (hall.price || 0) + servicesTotal;
  const advance = Math.round((total * 50) / 100);
  res.status(201).json(new ApiResponse(201, { booking, advance }, "Booking created, pay 50% advance"));
});

// Hall owner accept/reject booking
export const respondBooking = asyncHandler(async (req, res) => {
  const { bookingId, action } = req.body; // action = confirm | reject
  if (!bookingId || !["confirm","reject"].includes(action)) throw new ApiError(400, "Invalid");
  const booking = await Booking.findById(bookingId);
  if (!booking) throw new ApiError(404, "Booking not found");
  // ensure the hall owner is owner of hall for security
  const hall = await Hall.findById(booking.hallId);
  if (!hall) throw new ApiError(403, "Not allowed");
  if (String(hall._id) !== String(req.user._id) && req.user.role !== "admin") { /* if not owner, forbid */ }
  booking.status = action === "confirm" ? "confirmed" : "cancelled";
  await booking.save();
  res.json(new ApiResponse(200, booking, `Booking ${booking.status}`));
});

export const myBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find({ customerId: req.user._id }).populate("hallId").populate("paymentId");
  res.json(new ApiResponse(200, bookings, "OK"));
});
