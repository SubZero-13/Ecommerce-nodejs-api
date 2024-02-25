const Sequelize = require("sequelize");

require("dotenv").config();

const database = process.env.DATABASE;
const host = process.env.HOST;
const password = process.env.PASSWORD;
const user = process.env.USER;
const dialect = process.env.DIALECT;

const sequelize = new Sequelize(database, user, password, {
  dialect: dialect,
  host: host,
  logging: false
});


sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

module.exports = sequelize;
