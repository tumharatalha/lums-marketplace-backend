import { Router } from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userController";
import authMiddleware from "../middlewares/authMiddleware";

const router = Router();

// Public routes
router.post("/users", createUser);
router.get("/users", getUsers);
router.get("/users/:id", getUserById);

// Private routes
router.use(authMiddleware);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
