import express, { json } from "express";
import cors from "cors";
import tokenRouter from "./src/routes/tokenRouter.js";
import webuserRouter from "./src/routes/webuserRouter.js";
import productRouter from "./src/routes/productRouter.js";
import fileRouter from "./src/routes/fileRouter.js";
import { connectDB } from "./src/connectDB.js";
connectDB();
let app = express();
let port = process.env.PORT || 10000;
app.use(json());
app.use(cors());
app.use("/token", tokenRouter);
app.use("/webuser", webuserRouter);
app.use("/product", productRouter);
app.use("/file", fileRouter);
app.use(express.static("./public"));
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
