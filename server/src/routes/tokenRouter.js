import { Router } from "express";
import {
  deleteToken,
  generateToken,
  readAllToken,
  validateToken,
} from "../controller/tokenController.js";

let tokenRouter = Router();
tokenRouter.route("/generate").post(generateToken);
tokenRouter.route("/validate").post(validateToken);
tokenRouter.route("/readAll").get(readAllToken);
tokenRouter.route("/delete/:id").delete(deleteToken);
export default tokenRouter;
