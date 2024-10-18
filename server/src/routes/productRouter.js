import { Router } from "express";
import {
  createProductController,
  deleteProductController,
  readAllProductController,
  readSpecificProductController,
  updateProductController,
} from "../controller/productController.js";

let productRouter = Router();
productRouter.route("/create").post(createProductController);
productRouter.route("/read-all").get(readAllProductController);

productRouter.route("/:id").get(readSpecificProductController);
productRouter.route("/update/:id").patch(updateProductController);
productRouter.route("/delete/:id").delete(deleteProductController);

export default productRouter;
