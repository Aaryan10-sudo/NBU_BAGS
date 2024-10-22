import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { WebUser } from "../schema/model.js";
import { secretKey } from "../utils/constant.js";
import { sendMail } from "../utils/sendEmail.js";

export const createWebuser = async (req, res, next) => {
  let data = req.body;
  data = {
    ...data,
    password: await bcrypt.hash(data.password, 10),
    isVerifiedMail: false,
  };
  try {
    let result = await WebUser.findOne({ email: data.email });
    if (result) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }
    let create = await WebUser.create(data);

    let infoObj = {
      id: create._id,
    };

    let expiryInfo = {
      expiresIn: "1d",
    };

    let token = await jwt.sign(infoObj, secretKey, expiryInfo);

    await sendMail({
      to: data.email,
      subject: "Account Verification",
      html: `
        <h1>Verify your account</h1>
        <p>Click on the following link to verify your account: <a href="http://localhost:3000/verify/${token}">Verify</a></p>
        `,
    });
    res.status(200).json({
      success: true,
      message: "User created successfully",
      data: create,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const verifyMail = async (req, res, next) => {
  try {
    let tokenString = req.headers.authorization;
    let tokenArray = tokenString.split(" ");
    let token = tokenArray[1];

    let verifyToken = await jwt.verify(token, secretKey);
    let id = verifyToken.id;
    let result = await WebUser.findByIdAndUpdate(
      id,
      { isVerifiedMail: true },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Email verified successfully",
      data: result,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Invalid token or token expired",
    });
  }
};

export const login = async (req, res, next) => {
  let data = req.body;
  try {
    let result = await WebUser.findOne({ email: data.email });
    if (!result) {
      throw new Error("Invalid credentials");
    }
    if (result.isVerifiedMail === false) {
      throw new Error("Please verify your email first");
    }
    let verifyPassword = await bcrypt.compare(data.password, result.password);
    if (!verifyPassword) {
      throw new Error("Invalid Credentials");
    }
    let infoObj = {
      id: result._id,
    };
    let expiryInfo = {
      expiresIn: "100d",
    };

    let token = await jwt.sign(infoObj, secretKey, expiryInfo);

    res.status(200).json({
      success: true,
      message: "Login Successful",
      data: result,
      token: token,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

export const totalWebuser = async (req, res, next) => {
  try {
    let result = await WebUser.countDocuments();
    res.status(200).json({
      success: true,
      message: "Total user count retrieved successfully",
      count: result,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching product count", error });
  }
};
