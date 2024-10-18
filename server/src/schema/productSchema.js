import mongoose from "mongoose";
let productSchema = new mongoose.Schema({
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
  brand: {
    type: String,
    required: [true, "Brand is required"],
  },
});

export default productSchema;
