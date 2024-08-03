import express from "express";
import {
  addDetails,
  getUser,
  login,
  otpVerify,
  register,
  changeDetails,
} from "../controller/auth.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/otpVerify", otpVerify);
router.post("/addDetails/:id", addDetails);
router.post("/getUser", getUser);
router.post("/changeTime/:id",changeDetails);

export default router;
