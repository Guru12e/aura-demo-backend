import express from "express";
import {
  addDetails,
  getUser,
  login,
  otpVerify,
  register,
} from "../controller/auth.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/otpVerify", otpVerify);
router.post("/addDetails/:id", addDetails);
router.post("/getUser", getUser);

export default router;
