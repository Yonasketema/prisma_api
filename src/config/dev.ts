export default {
  env: process.env.NODE_ENV,
  port: 8080,
  dbUrl: process.env.DATABASE_URL_LOCAL,
  jwt_secret: process.env.JWT_SECRET_LOCAL,
};
