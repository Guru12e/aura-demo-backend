import express from "express";
import {
  dasaInformation,
  getDailyHoroscope,
  getRasi,
  horoscopeChart,
  karanaDuration,
  mahaAndAntarDasas,
  mahaDasas,
  nakshatraTimings,
  navamsaChart,
  navamsaChartInfo,
  planets,
  planetsExtended,
  tithiTimings,
  vedicWeekDays,
  yogaDurations,
} from "../controller/report.controller.js";

const router = express.Router();

router.post("/planets", planets);
router.post("/planetsExtended", planetsExtended);
router.post("/navamsaChartInfo", navamsaChartInfo);
router.post("/chart/horoscopeChart", horoscopeChart);
router.post("/chart/navamsaChart", navamsaChart);
router.post("/panchang/tithi", tithiTimings);
router.post("/panchang/nakshatra", nakshatraTimings);
router.post("/panchang/yoga", yogaDurations);
router.post("/panchang/karana", karanaDuration);
router.post("/panchang/vedic", vedicWeekDays);
router.post("/dasa/mahaDasas", mahaDasas);
router.post("/dasa/mahaDasa-antraDasa", mahaAndAntarDasas);
router.post("/dasa/dasaInfo", dasaInformation);
router.post("/getRasi", getRasi);
router.post("/getTodayHoroscope", getDailyHoroscope);

export default router;
