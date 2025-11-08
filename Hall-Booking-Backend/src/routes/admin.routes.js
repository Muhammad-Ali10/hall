import express from "express";
import { protect } from "../middlewares/auth.middleware.js";
import { authorize } from "../middlewares/role.middleware.js";
import { pendingHalls, setHallStatus, pendingProviders, setProviderStatus } from "../controllers/admin.controller.js";

const router = express.Router();
router.use(protect, authorize("admin"));
router.get("/halls/pending", pendingHalls);
router.patch("/halls/status", setHallStatus);
router.get("/providers/pending", pendingProviders);
router.patch("/providers/status", setProviderStatus);

export default router;
