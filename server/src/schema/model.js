import mongoose from "mongoose";
import tokenSchema from "./tokenSchema.js";
import webuserSchema from "./webuserSchema.js";
import productSchema from "./productSchema.js";

export const Token = mongoose.model("Token", tokenSchema);
export const WebUser = mongoose.model("WebUser", webuserSchema);
export const Product = mongoose.model("Product", productSchema);
