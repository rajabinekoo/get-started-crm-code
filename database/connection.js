const mysql = require("mysql2");

async function makeConnection() {
  try {
    const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "test",
      password: "efftoreff",
    });

    return connection;
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = makeConnection;
