import express from "express";
import {
  checkAuth,
  forgotPassword,
  logOut,
  resetPassword,
  signIn,
  signUp,
  verifyEmail,
} from "../controllers/auth.controllers.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/check-auth", verifyToken, checkAuth);
router.post("/sign-in", signIn);
router.post("/sign-up", signUp);
router.post("/log-out", logOut);

router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);

router.post("/reset-password/:token", resetPassword);
export default router;
