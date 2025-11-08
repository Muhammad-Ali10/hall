import express from "express";
import { createCity, listCities } from "../controllers/city.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { authorize } from "../middlewares/role.middleware.js";

const router = express.Router();
router.post("/", protect, authorize("admin"), createCity);
router.get("/", listCities);
export default router;
