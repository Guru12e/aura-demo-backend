import express from "express";
import {
  addDetails,
  getUser,
  login,
  otpVerify,
  register,
  changeDetails,
  sendFeedBack
} from "../controller/auth.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/otpVerify", otpVerify);
router.post("/addDetails/:id", addDetails);
router.post("/getUser", getUser);
router.post("/changeTime/:id",changeDetails);
router.post("/feedback",sendFeedBack);

export default router;
