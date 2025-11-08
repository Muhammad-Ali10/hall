import Razorpay from "razorpay";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import env from "../config/env.js";
import { Booking } from "../models/booking.model.js";
import { Payment } from "../models/payment.model.js";

const razor = new Razorpay({
  key_id: env.razorpayKeyId,
  key_secret: env.razorpaySecret
});

// Create order (customer requests order for advance)
export const createOrder = asyncHandler(async (req, res) => {
  const { bookingId, amount } = req.body;
  if (!bookingId || !amount) throw new ApiError(400, "bookingId and amount required");
  const booking = await Booking.findById(bookingId);
  if (!booking) throw new ApiError(404, "Booking not found");
  const options = { amount: amount * 100, currency: "INR", receipt: `rcpt_${bookingId}` };
  const order = await razor.orders.create(options);
  // store order id temporarily if you want
  res.json(new ApiResponse(200, order, "Razorpay order created"));
});

// Capture payment: after client sends paymentId + orderId + signature
export const capturePayment = asyncHandler(async (req, res) => {
  const { bookingId, razorpayOrderId, razorpayPaymentId, amount } = req.body;
  if (!bookingId || !razorpayOrderId || !razorpayPaymentId) throw new ApiError(400, "Missing fields");
  const payment = await Payment.create({
    bookingId,
    customerId: req.user._id,
    amount: amount || 0,
    method: "razorpay",
    status: "paid",
    razorpayOrderId,
    razorpayPaymentId
  });
  await Booking.findByIdAndUpdate(bookingId, { paymentId: payment._id, status: "confirmed" });
  res.json(new ApiResponse(200, payment, "Payment captured and booking confirmed"));
});
