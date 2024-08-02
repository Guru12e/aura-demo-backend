import express from "express";
import {
  dailyPrediction,
  housePrediction,
} from "../controller/prediction.controller.js";

const router = express.Router();

router.post("/daily", dailyPrediction);
router.post("/house", housePrediction);

export default router;
