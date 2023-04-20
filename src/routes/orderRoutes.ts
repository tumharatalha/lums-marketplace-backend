import express from "express";
import {
  getOrder,
  getOrders,
  createOrder,
} from "../controllers/orderController";
import authMiddleware from "../middlewares/authMiddleware";

const router = express.Router();

router.get("/orders", authMiddleware, getOrders);
router.get("/orders/:id", authMiddleware, getOrder);
router.post("/orders", authMiddleware, createOrder);

export default router;
