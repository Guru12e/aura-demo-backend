import express from "express";
import {
  dailyPrediction,
  housePrediction,
  lifePrediction,
} from "../controller/prediction.controller.js";

const router = express.Router();

router.post("/daily", dailyPrediction);
router.post("/house", housePrediction);
router.post("/life", lifePrediction);

export default router;
