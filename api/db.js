const mysql = require("mysql");
const config = require("./config/index.js");

const dbConfig = {
  host: config.mysql.host,
  user: config.mysql.username,
  password: config.mysql.password,
  database: config.mysql.db,
};

let connection = mysql.createPool(dbConfig);

module.exports = connection;
