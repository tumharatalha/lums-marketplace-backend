/** @format */

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        dateAndTime: {
            type: Date,
        },
        location: {
            type: String,
        },
        details: {
            type: String,
        },
        price: {
            type: String,
        },
        imgURI: {
            type: String,
        },
        userId: { type: Schema.Types.ObjectId, ref: "user" },
        categoryId: { type: Schema.Types.ObjectId, ref: "category" },
    },
    { timestamps: true }
);
const Product = mongoose.model("product", ProductSchema);
export default Product;
