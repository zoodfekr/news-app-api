import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";

import selector_router from "./routes/selectors_routes.js";
import ai_router from "./routes/ai.js";
import { connectDb } from "./config/db.js";
import morgan from "morgan";

const app = express();
const PORT = 3000;

app.use(morgan("dev"));

app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => res.status(200).json({ message: "app is running" }));

// routes
app.use("/api", selector_router);
app.use("/api", ai_router);

// end routes
connectDb();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
