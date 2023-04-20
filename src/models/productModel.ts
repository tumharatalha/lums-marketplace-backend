import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  price: number;
  image: URL;
  description: string;
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: URL, required: true },
  description: { type: String, required: true },
});

export default mongoose.model<IProduct>("Product", ProductSchema);
