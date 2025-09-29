import express from "express";
import {
  getProfile,
  loginUser,
  registerUser,
} from "../controller/user.controller.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", getProfile);

export default router;
