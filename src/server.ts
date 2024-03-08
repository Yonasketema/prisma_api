import "dotenv/config";

import config from "./config";
import app from ".";

const PORT = config.port;
app.listen(PORT, () => {
  console.log(`> App running on port http://localhost:${PORT} ...`);
});
