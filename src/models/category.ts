/** @format */

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CategorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);
const Category = mongoose.model("category", CategorySchema);
export default Category;
