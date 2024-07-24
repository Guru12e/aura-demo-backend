import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.route.js";
import reportRouter from "./routes/report.route.js";
import predictionRouter from "./routes/prediction.route.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use(cors({ origin: "http://192.168.1.39:8081", credentials: true }));

app.use("/auth", authRouter);
app.use("/prediction", predictionRouter);
app.use("/report", reportRouter);

app.listen(5000, () => {
  console.log("App is listening at 5000");
});
