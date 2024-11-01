import mongoose from "mongoose";

export const activitySchema = new mongoose.Schema({
  Activity: {
    type: String,
    required: true,
  },
});
