import express from "express";
import { connectDB } from "./db/connectDB.js";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
dotenv.config();
connectDB();
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("server is running  on port 3000");
});
