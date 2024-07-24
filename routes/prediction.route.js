import express from "express";
import {
  dailyPrediction,
  emotionPrediction,
  healthPrediction,
  housePrediction,
  wealthPrediction,
} from "../controller/prediction.controller.js";

const router = express.Router();

router.post("/daily", dailyPrediction);
router.post("/health", healthPrediction);
router.post("/wealth", wealthPrediction);
router.post("/emotion", emotionPrediction);
router.post("/house", housePrediction);

export default router;
