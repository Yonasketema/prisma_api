import dotenv from "dotenv";
import app from ".";

dotenv.config({ path: ".env" });

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`> App running on port http://localhost:${PORT} ...`);
});
