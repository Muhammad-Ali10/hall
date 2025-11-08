import express from "express";
import { registerAuth, login, refresh, logout } from "../controller/auth.controller.js";
const router = express.Router();
router.post("/register", registerAuth);
router.post("/login", login);
router.post("/refresh", refresh);
router.post("/logout", logout);
export default router;
