import { Token } from "../schema/model.js";

export const generateToken = async (req, res, next) => {
  const generateToken = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let token = "";
    for (let i = 0; i < 7; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      token += characters[randomIndex];
    }
    return token;
  };

  const tokens = Array.from({ length: 100 }, generateToken);
  console.log(tokens);

  try {
    const tokenDocuments = tokens.map((token) => ({ token }));
    let result = await Token.insertMany(tokenDocuments);

    res.status(201).json({
      success: true,
      message: "Tokens generated and stored successfully",
      tokens: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const validateToken = async (req, res, next) => {
  let token = req.body.token;
  try {
    let result = await Token.findOne({ token: token });
    if (!result) {
      throw new Error("Invalid Token");
    }

    const getRandomDiscount = () => {
      const randomNum = Math.random();
      if (randomNum < 0.6) {
        return Math.random() < 0.5 ? 5 : 15;
      } else if (randomNum < 0.8) {
        return Math.random() < 0.5 ? 10 : 25;
      } else if (randomNum < 0.95) {
        return 30;
      } else {
        return 40;
      }
    };

    const discount = getRandomDiscount();

    res.status(200).json({
      success: true,
      message: "Token is valid",
      discount: `${discount}%`,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteToken = async (req, res, next) => {
  try {
    let result = await Token.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Token deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readAllToken = async (req, res, next) => {
  try {
    let result = await Token.find();
    res.status(200).json({
      success: true,
      message: "Tokens retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
