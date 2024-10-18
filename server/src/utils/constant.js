import { config } from "dotenv";

config();
export const URL = process.env.MONGODB_URL;
export const secretKey = process.env.SECRET_KEY;
export const email = process.env.EMAIL;
export const password = process.env.APP_PASS;
