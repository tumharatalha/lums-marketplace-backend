import express from "express";
import userRouter from "./userRoutes";
import { productRouter } from "./productRoutes";
import orderRouter from "./orderRoutes";
import paymentRouter from "./paymentRoutes";

const router = express.Router();

router.use("/users", userRouter);
router.use("/products", productRouter);
router.use("/orders", orderRouter);
router.use("/payments", paymentRouter);

export default router;
