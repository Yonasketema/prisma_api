import express from "express";
import morgan from "morgan";
import path from "path";

import router from "./router";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/index.html"));
});

app.use("/api", router);

export default app;
