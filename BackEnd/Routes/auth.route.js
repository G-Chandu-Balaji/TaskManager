import express from "express";
import {
  getProfile,
  loginUser,
  registerUser,
} from "../controller/user.controller.js";
import authMiddleware from "../middleware/authmiddleware.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authMiddleware, getProfile);

export default router;
