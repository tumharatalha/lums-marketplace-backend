/** @format */

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import apiRoutes from "./routes";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
var jsonParser = bodyParser.json();
app.use(jsonParser);
app.use(cors());
// Connect to MongoDB Atlas
mongoose
    .connect(process.env.MONGO_URI!)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error(err);
    });
// API Routes
app.use("/api", apiRoutes);

// Error Handling Middleware
app.use((err: any, req: any, res: any, next: any) => {
    console.error(err.stack);
    res.status(500).send("Internal Server Error");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
