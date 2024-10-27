import mongoose from "mongoose";
import { URL } from "./utils/constant.js";

export const connectDB = () => {
  mongoose.connect(URL);
  console.log("Connect to mongoDB");
};
