import * as dotenv from "dotenv";

import config from "./config";
import app from ".";

dotenv.config();

const PORT = config.port;
app.listen(PORT, () => {
  console.log(`> App running on port http://localhost:${PORT} ...`);
});
