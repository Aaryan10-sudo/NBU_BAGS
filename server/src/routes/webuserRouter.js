import { Router } from "express";
import {
  createWebuser,
  login,
  totalWebuser,
  verifyMail,
} from "../controller/webuserController.js";

let webuserRouter = Router();
webuserRouter.route("/create").post(createWebuser);
webuserRouter.route("/verify-mail").post(verifyMail);
webuserRouter.route("/login").post(login);
webuserRouter.route("/total-user").get(totalWebuser);
export default webuserRouter;
