import express from "express";
import { createSelector, getAllSelectors } from "../controllers/selectors_ctrl.js";

const router = express.Router();

router.get("/selectors", getAllSelectors);
router.post("/selectors", createSelector);

export default router;
