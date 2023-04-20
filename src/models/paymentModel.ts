import { Schema, model } from "mongoose";

interface IPayment {
  user: string;
  order: string;
  amount: number;
  paymentMethod: string;
  paymentResult: any;
}

const paymentSchema = new Schema<IPayment>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    order: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Order",
    },
    amount: {
      type: Number,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
  },
  { timestamps: true }
);

const Payment = model<IPayment>("Payment", paymentSchema);

export default Payment;
