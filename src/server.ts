import express from "express";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const app = express();

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`> App running on port http://localhost:${PORT} ...`);
});

export default app;
