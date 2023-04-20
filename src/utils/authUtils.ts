import { Request } from "express";
import jwt from "jsonwebtoken";
import User from "../models/userModel";

// Generate a JWT token with a given user id
export const generateAuthToken = (userId: string): string => {
  const token = jwt.sign({ _id: userId }, process.env.JWT_SECRET_KEY as string);
  return token;
};

// Verify an incoming JWT token in a request header and find the user associated with it
export const findUserByAuthToken = async (
  req: Request
): Promise<User | null> => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) throw new Error("Invalid token");

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string);
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    if (!user) throw new Error("Invalid token");

    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};
