import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";

import router from "./routes/selectors_routes.js";
import ai_router from "./routes/ai.js";

const app = express();
const PORT = 3000;

app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => res.status(200).json({ message: "app is running" }));

// routes
app.use("/api", router);
app.use("/api", ai_router);

// end routes

const dburl = process.env.MONGODB_URI;
const dbport = process.env.MONGODB_PORT;

mongoose
  .connect(`${dburl}:${dbport}/${process.env.MONGODB_DB}`)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
