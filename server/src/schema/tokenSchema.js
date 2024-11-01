import mongoose from "mongoose";

export const tokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: [true, "Please provide a valid token"],
  },
});
