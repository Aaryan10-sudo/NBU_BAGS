import mongoose from "mongoose";

let tokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: [true, "Please provide a valid token"],
  },
});
export default tokenSchema;
