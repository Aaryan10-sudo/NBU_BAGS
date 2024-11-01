import mongoose from "mongoose";
export const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, "Product name is required"],
  },
  category: {
    type: String,
    required: [true, "Category is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  productDescription: {
    type: String,
    required: [true, "Product description is required"],
  },
  image: {
    type: String,
    required: [true, "Image is required"],
  },
  brand: {
    type: String,
    required: [true, "Brand is required"],
  },
});
