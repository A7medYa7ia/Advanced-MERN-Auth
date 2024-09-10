import express from "express";
import { logOut, signIn, signUp } from "../controllers/auth.controllers.js";

const router = express.Router();

router.post("/sign-in", signIn);
router.post("/sign-up", signUp);
router.post("/log-out", logOut);
export default router;
