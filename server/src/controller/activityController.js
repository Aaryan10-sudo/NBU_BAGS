import { Activity } from "../schema/model.js";

export const activityController = async (req, res, next) => {
  try {
    let result = await Activity.create(req.body);
    res.status(201).json({
      success: true,
      message: "Activity created successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getActivityController = async (req, res, next) => {
  try {
    let result = await Activity.find({});
    res.status(200).json({
      success: true,
      message: "Activity retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
