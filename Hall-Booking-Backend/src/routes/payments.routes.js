import express from "express";
import { createOrder, capturePayment } from "../controllers/payment.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { authorize } from "../middlewares/role.middleware.js";

const router = express.Router();
router.post("/create-order", protect, authorize("customer"), createOrder);
router.post("/capture", protect, authorize("customer"), capturePayment);

export default router;
