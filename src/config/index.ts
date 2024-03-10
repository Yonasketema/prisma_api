import merge from "lodash.merge";

process.env.NODE_ENV = process.env.NODE_ENV || "development";

let envConfig;

if (process.env.NODE_ENV === "production") {
  envConfig = require("./prod").default;
} else if (process.env.NODE_ENV === "development") {
  envConfig = require("./dev").default;
}

const defaultConfig = {
  env: process.env.NODE_ENV,
  port: 3001,
  dbUrl: process.env.DATABASE_URL,
  jwt_secret: process.env.JWT_SECRET,
};

export default merge(defaultConfig, envConfig);
