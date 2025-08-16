import express from "express";
import {
  createSelector,
  getAllSelectors,
} from "../controllers/selectors_ctrl.js";

const selector_router = express.Router();

selector_router.get("/selectors", getAllSelectors);
selector_router.post("/selectors", createSelector);

export default selector_router;
