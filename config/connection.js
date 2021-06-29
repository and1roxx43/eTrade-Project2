const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    "heroku_0fba5726f1744f4",
    "b9b6a5eb7a21d7",
    "6dcc9c58",
    {
      host: "us-cdbr-east-04.cleardb.com",
      dialect: "mysql",
      port: 3306,
    }
  );
}

module.exports = sequelize;
