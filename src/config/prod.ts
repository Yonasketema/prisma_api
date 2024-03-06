export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  dbUrl: process.env.DATABASE_URL_PROD,
  jwt_secret: process.env.JWT_SECRET_PROD,
};
