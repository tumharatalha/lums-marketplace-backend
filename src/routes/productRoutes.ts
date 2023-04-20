import express, { Request, Response } from "express";
import { body } from "express-validator";
import { requireAuth, validateRequest } from "./middlewares";
import { Product } from "../models";

const router = express.Router();

router.post(
  "/api/products",
  requireAuth,
  [
    body("title").not().isEmpty().withMessage("Title is required"),
    body("description").not().isEmpty().withMessage("Description is required"),
    body("price")
      .isFloat({ gt: 0 })
      .withMessage("Price must be greater than 0"),
    body("imageUrl").not().isEmpty().withMessage("Image URL is required"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { title, description, price, imageUrl } = req.body;

    const product = Product.build({
      title,
      description,
      price,
      imageUrl,
      userId: req.currentUser!.id,
    });
    await product.save();

    res.status(201).send(product);
  }
);

router.get("/api/products/:id", async (req: Request, res: Response) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).send({ errors: [{ message: "Product not found" }] });
  }

  res.send(product);
});

router.get("/api/products", async (req: Request, res: Response) => {
  const products = await Product.find({});

  res.send(products);
});

router.put(
  "/api/products/:id",
  requireAuth,
  [
    body("title").not().isEmpty().withMessage("Title is required"),
    body("description").not().isEmpty().withMessage("Description is required"),
    body("price")
      .isFloat({ gt: 0 })
      .withMessage("Price must be greater than 0"),
    body("imageUrl").not().isEmpty().withMessage("Image URL is required"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res
        .status(404)
        .send({ errors: [{ message: "Product not found" }] });
    }

    if (product.userId !== req.currentUser!.id) {
      return res.status(401).send({ errors: [{ message: "Not authorized" }] });
    }

    const { title, description, price, imageUrl } = req.body;

    product.set({
      title,
      description,
      price,
      imageUrl,
    });
    await product.save();

    res.send(product);
  }
);

router.delete(
  "/api/products/:id",
  requireAuth,
  async (req: Request, res: Response) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res
        .status(404)
        .send({ errors: [{ message: "Product not found" }] });
    }

    if (product.userId !== req.currentUser!.id) {
      return res.status(401).send({ errors: [{ message: "Not authorized" }] });
    }

    await product.remove();

    res.send({ message: "Product deleted successfully" });
  }
);

export { router as productRouter };
