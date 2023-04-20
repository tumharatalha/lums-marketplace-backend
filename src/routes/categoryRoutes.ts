/** @format */

import express from "express";
import { addCategory, getCategories } from "../controllers/categoryController";

const router = express.Router();

router.post("/", addCategory).get("/", getCategories);

export default router;
