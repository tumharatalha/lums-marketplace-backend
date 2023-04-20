import { Schema, model, Document } from "mongoose";

export interface IOrder extends Document {
  user: string;
  products: { productId: string; quantity: number }[];
  total: number;
}

const orderSchema = new Schema<IOrder>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    products: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
        quantity: { type: Number, required: true },
      },
    ],
    total: { type: Number, required: true },
  },
  { timestamps: true }
);

const Order = model<IOrder>("Order", orderSchema);

export default Order;
