const mysql = require("mysql");
const config = require("./config/index.js");

const dbConfig = {
  host: config.mysql.host,
  user: config.mysql.username,
  password: config.mysql.password,
  database: config.mysql.db,
};

let connection;

function connect() {
  connection = mysql.createConnection(dbConfig);

  connection.connect((err) => {
    if (err) {
      console.log("[EROR DB] Connection error in connect database", err);
      //Try Again
      setTimeout(connect, 2000);
    } else {
      console.log("[DB CONNECTED]");
    }
  });

  //Reconnect
  connection.on("error", (err) => {
    if (
      err === "PROTOCOL_CONNECTION_LOST" ||
      err === "PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR"
    ) {
      connect();
    }
  });
}

connect();

module.exports = connection;
