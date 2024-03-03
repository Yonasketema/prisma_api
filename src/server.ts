import * as dotenv from "dotenv";
import app from ".";

dotenv.config();

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`> App running on port http://localhost:${PORT} ...`);
});
