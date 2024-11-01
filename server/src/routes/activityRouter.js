import { Router } from "express";
import {
  activityController,
  getActivityController,
} from "../controller/activityController.js";

export const activityRouter = Router();
activityRouter.route("/create").post(activityController);
activityRouter.route("/get").get(getActivityController);
