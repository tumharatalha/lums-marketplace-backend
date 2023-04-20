import express from "express";
import { createPayment, getPayments } from "../controllers/paymentController";
import authMiddleware from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/payments", authMiddleware, createPayment);
router.get("/payments", authMiddleware, getPayments);

export default router;
