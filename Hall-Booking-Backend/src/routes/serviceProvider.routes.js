import express from "express";
import { registerSP, loginSP, addService, listServicesByProvider } from "../controllers/serviceProvider.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { authorize } from "../middlewares/role.middleware.js";

const router = express.Router();
router.post("/register", registerSP);
router.post("/login", loginSP);
router.post("/services", protect, authorize("serviceProvider"), addService);
router.get("/services/me", protect, authorize("serviceProvider"), listServicesByProvider);

export default router;
