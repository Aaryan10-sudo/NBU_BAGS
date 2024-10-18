import express, { json } from "express";
import cors from "cors";
import { connectDB } from "./src/connectDB/connectDB.js";
import tokenRouter from "./src/routes/tokenRouter.js";
import webuserRouter from "./src/routes/webuserRouter.js";
import productRouter from "./src/routes/productRouter.js";
connectDB();
let app = express();
let port = 5555;
app.use(json());
app.use(cors());
app.use("/token", tokenRouter);
app.use("/webuser", webuserRouter);
app.use("/product", productRouter);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
