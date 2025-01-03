import mongoose from "mongoose";

export const webuserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
  },
  email: {
    type: String,
    required: [true, "Please provide a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Please provide a valid phone number"],
  },
  isVerifiedMail: {
    type: Boolean,
  },
});
