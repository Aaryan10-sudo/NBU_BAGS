import { Router } from "express";
import {
  createWebuser,
  login,
  resetPassword,
  storePassword,
  totalWebuser,
  verifyMail,
} from "../controller/webuserController.js";
import { isAuthenticated } from "../middleware/isAuthorized.js";

let webuserRouter = Router();
webuserRouter.route("/create").post(createWebuser);
webuserRouter.route("/verify-mail").post(verifyMail);
webuserRouter.route("/login").post(login);
webuserRouter.route("/total-user").get(totalWebuser);
webuserRouter.route("/update-password").post(isAuthenticated, resetPassword);
webuserRouter.route("/store-password").post(storePassword);
export default webuserRouter;
