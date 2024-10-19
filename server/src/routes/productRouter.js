import { Router } from "express";
import {
  createProductController,
  deleteProductController,
  readAllProductController,
  readEightProductController,
  readSpecificProductController,
  updateProductController,
} from "../controller/productController.js";

let productRouter = Router();
productRouter.route("/create").post(createProductController);
productRouter.route("/readall").get(readAllProductController);
productRouter.route("/read-all").get(readEightProductController);

productRouter.route("/:id").get(readSpecificProductController);
productRouter.route("/update/:id").patch(updateProductController);
productRouter.route("/delete/:id").delete(deleteProductController);

export default productRouter;
