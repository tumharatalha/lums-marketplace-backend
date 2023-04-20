/** @format */

import { Request, Response } from "express";
import Product from "../models/product";

// Get all products
export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: "Failed to get products", error: err });
    }
};

// Get a single product by id
export const getProductById = async (req: Request, res: Response) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            res.status(404).json({ message: "Product not found" });
        } else {
            res.status(200).json(product);
        }
    } catch (err) {
        res.status(500).json({ message: "Failed to get product", error: err });
    }
};
export const getProductByCategoryId = async (req: Request, res: Response) => {
    try {
        const product = await Product.find({
            categoryId: req.params.id,
        });
        if (!product) {
            res.status(404).json({ message: "Product not found" });
        } else {
            res.status(200).json(product);
        }
    } catch (err) {
        res.status(500).json({ message: "Failed to get product", error: err });
    }
};

// Create a new product
export const createProduct = async (req: any, res: Response) => {
    try {
        req.body.userId = req.user._id;
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (err) {
        res.status(500).json({
            message: "Failed to create product",
            error: err,
        });
    }
};

// Update a product by id
export const updateProductById = async (req: Request, res: Response) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
            }
        );
        if (!product) {
            res.status(404).json({ message: "Product not found" });
        } else {
            res.status(200).json(product);
        }
    } catch (err) {
        res.status(500).json({
            message: "Failed to update product",
            error: err,
        });
    }
};

// Delete a product by id
export const deleteProductById = async (req: Request, res: Response) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            res.status(404).json({ message: "Product not found" });
        } else {
            res.status(200).json(product);
        }
    } catch (err) {
        res.status(500).json({
            message: "Failed to delete product",
            error: err,
        });
    }
};
