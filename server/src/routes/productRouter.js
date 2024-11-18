import { Router } from "express";
import {
  createProductController,
  deleteProductController,
  readAllProductController,
  readEightProductController,
  readSpecificProductController,
  searchProduct,
  searchProductController,
  totalProduct,
  updateProductController,
} from "../controller/productController.js";

let productRouter = Router();
productRouter.route("/create").post(createProductController);
productRouter.route("/readall").get(readAllProductController);
productRouter.route("/read-all").get(readEightProductController);
productRouter.route("/total-product").get(totalProduct);
productRouter.route("/search").get(searchProduct);
productRouter.route("/agg").get(searchProductController);

productRouter.route("/:id").get(readSpecificProductController);
productRouter.route("/update/:id").patch(updateProductController);
productRouter.route("/delete/:id").delete(deleteProductController);

export default productRouter;
