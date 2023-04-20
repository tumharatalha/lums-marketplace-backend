/** @format */

import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";

const authMiddleware = (req: any, res: Response, next: NextFunction) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
        return res.status(401).send({ error: "Authentication required" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).send({ error: "Invalid token" });
    }
};

export default authMiddleware;
