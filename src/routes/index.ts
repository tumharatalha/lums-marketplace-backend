/** @format */

import express from "express";
import userRouter from "./userRoutes";
import { productRouter } from "./productRoutes";
// import orderRouter from "./orderRoutes";
// import paymentRouter from "./paymentRoutes";
import categoryRouter from "./categoryRoutes";
import authRouter from "./authRoutes";

const router = express.Router();

router.use("/users", userRouter);
router.use("/products", productRouter);
router.use("/category", categoryRouter);
router.use("/auth", authRouter);

export default router;
