import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("mongoDB connected successfully");
  } catch (err) {
    console.log("error connection to mongoDb: ", err.message);
    process.exit(1);
  }
};
