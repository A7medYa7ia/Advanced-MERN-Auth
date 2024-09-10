import express from "express";
import { connectDB } from "./db/connectDB.js";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();
connectDB();
app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("server is running  on port 3000");
});
