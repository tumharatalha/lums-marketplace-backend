/** @format */

import express, { Request, Response } from "express";
import { body } from "express-validator";
import Product from "../models/product";
import {
    createProduct,
    getProductByCategoryId,
    getProductById,
} from "../controllers/productController";
import authMiddleware from "../middlewares/authMiddleware";

const router = express.Router();
router.use(authMiddleware);
router.post(
    "/",
    [
        body("name").not().isEmpty().withMessage("Title is required"),
        body("description")
            .not()
            .isEmpty()
            .withMessage("Description is required"),
        body("price")
            .isFloat({ gt: 0 })
            .withMessage("Price must be greater than 0"),
    ],
    createProduct
);

router.get("/:id", getProductById);

router.get("/", async (req: Request, res: Response) => {
    const products = await Product.find({});

    res.send(products);
});
router.get("/category/:id", getProductByCategoryId);
// router.put(
//     "/api/products/:id",
//     requireAuth,
//     [
//         body("title").not().isEmpty().withMessage("Title is required"),
//         body("description")
//             .not()
//             .isEmpty()
//             .withMessage("Description is required"),
//         body("price")
//             .isFloat({ gt: 0 })
//             .withMessage("Price must be greater than 0"),
//         body("imageUrl").not().isEmpty().withMessage("Image URL is required"),
//     ],
//     validateRequest,
//     async (req: Request, res: Response) => {
//         const product = await Product.findById(req.params.id);

//         if (!product) {
//             return res
//                 .status(404)
//                 .send({ errors: [{ message: "Product not found" }] });
//         }

//         if (product.userId !== req.currentUser!.id) {
//             return res
//                 .status(401)
//                 .send({ errors: [{ message: "Not authorized" }] });
//         }

//         const { title, description, price, imageUrl } = req.body;

//         product.set({
//             title,
//             description,
//             price,
//             imageUrl,
//         });
//         await product.save();

//         res.send(product);
//     }
// );

// router.delete(
//     "/api/products/:id",
//     requireAuth,
//     async (req: Request, res: Response) => {
//         const product = await Product.findById(req.params.id);

//         if (!product) {
//             return res
//                 .status(404)
//                 .send({ errors: [{ message: "Product not found" }] });
//         }

//         if (product.userId !== req.currentUser!.id) {
//             return res
//                 .status(401)
//                 .send({ errors: [{ message: "Not authorized" }] });
//         }

//         await product.remove();

//         res.send({ message: "Product deleted successfully" });
//     }
// );

export { router as productRouter };
