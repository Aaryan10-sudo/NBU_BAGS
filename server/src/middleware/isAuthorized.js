import { secretKey } from "../utils/constant.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  try {
    let tokenString = req.headers.authorization;
    let tokenArray = tokenString.split(" ");
    let token = tokenArray[1];
    let user = await jwt.verify(token, secretKey);
    req._id = user.id;
    next();
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Token not valid",
    });
  }
};
