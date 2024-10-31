import mongoose from "mongoose";

export const storePassword = new mongoose.Schema({
  password: {
    type: String,
    required: [true, "Password field is required"],
  },
  changedAt: {
    type: String,
    required: [true, "Time field is required"],
  },
});
