import express from "express";
import { createBooking, respondBooking, myBookings } from "../controllers/booking.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { authorize } from "../middlewares/role.middleware.js";

const router = express.Router();
router.post("/", protect, authorize("customer"), createBooking);
router.patch("/respond", protect, authorize("hallOwner","admin"), respondBooking);
router.get("/me", protect, authorize("customer"), myBookings);

export default router;
