import { Request, Response } from "express";
import Payment from "../models/paymentModel";

// @desc    Create a new payment
// @route   POST /api/payments
// @access  Private
export const createPayment = async (req: any, res: Response) => {
  try {
    const payment = new Payment({
      user: req.user._id,
      order: req.body.orderId,
      amount: req.body.amount,
      paymentMethod: req.body.paymentMethod,
      paymentResult: req.body.paymentResult,
    });

    const createdPayment = await payment.save();

    res.status(201).json(createdPayment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
