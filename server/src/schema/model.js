import mongoose from "mongoose";
import { storePassword } from "./storePasswordSchema.js";
import { activitySchema } from "./activitySchema.js";
import { productSchema } from "./productSchema.js";
import { webuserSchema } from "./webuserSchema.js";
import { tokenSchema } from "./tokenSchema.js";

export const Token = mongoose.model("Token", tokenSchema);
export const WebUser = mongoose.model("WebUser", webuserSchema);
export const Product = mongoose.model("Product", productSchema);
export const Password = mongoose.model("Password", storePassword);
export const Activity = mongoose.model("Activity", activitySchema);
