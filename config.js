const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  DB_HOST: process.env.DB_HOST,
  SECRET_KEY: process.env.SECRET_KEY,
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  SENDGRID_EMAIL:process.env.SENDGRID_EMAIL,
};
