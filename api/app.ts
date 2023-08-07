import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import path from "path";

import * as middlewares from "./middlewares";
import api from "./api";
import MessageResponse from "./interfaces/MessageResponse";

require("dotenv").config();

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/v1", api);
app.use(express.static(path.join(__dirname, "public")));
app.use("*", (_req, res) => {
  res.sendFile(path.join(`${__dirname}/public/index.html`));
});

app.use(middlewares.errorHandler);

export default app;
