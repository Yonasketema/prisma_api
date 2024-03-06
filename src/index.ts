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

app.use((error, req, res, next) => {
  if (error.type === "auth") {
    res.status(401).json({
      message: "authorization",
    });
  } else if (error.type === "input") {
    res.status(400).json({
      message: "invalid input",
    });
  } else {
    res.status(500).json({
      message: "internal error",
    });
  }
});

export default app;
