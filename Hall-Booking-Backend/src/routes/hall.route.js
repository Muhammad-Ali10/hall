import express from "express";
import { protect } from "../middlerwares/auth.middlerwares.js";
import { upload } from "../middlerwares/multer.middlerwares.js";
import {
  registerHall,
  loginHall,
  getMyProfile,
  updateDetails,
  uploadAvatar,
  uploadCover,
  listHalls
} from "../controller/hall.controller.js";

const router = express.Router();

router.post("/register", registerHall);
router.post("/login", loginHall);
router.get("/", listHalls);
router.get("/me", protect, getMyProfile);
router.patch("/me", protect, updateDetails);
router.patch("/me/avatar", protect, upload.single("avatar"), uploadAvatar);
router.patch("/me/cover", protect, upload.single("cover"), uploadCover);

export default router;
