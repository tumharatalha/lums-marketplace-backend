/** @format */

import { Request, Response } from "express";
import Category from "../models/category";

export const addCategory = async (req: Request, res: Response) => {
    try {
        console.log("in add category");
        console.log(req.body);
        const { name } = req.body;
        const category = await Category.create({
            name,
        });
        res.send({ category });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
};
export const getCategories = async (req: Request, res: Response) => {
    try {
        const categories = await Category.find({});
        res.send({ category: categories });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
};
