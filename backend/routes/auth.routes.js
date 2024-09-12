import express from "express";
import {
  forgotPassword,
  logOut,
  signIn,
  signUp,
  verifyEmail,
} from "../controllers/auth.controllers.js";

const router = express.Router();

router.post("/sign-in", signIn);
router.post("/sign-up", signUp);
router.post("/log-out", logOut);

router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
export default router;
