import express from "express";
import { getAi } from "../controllers/Ai_ctrl.js";

const ai_router = express.Router();

ai_router.get("/ai", getAi);

export default ai_router;
