const mysql = require("mysql");
require("dotenv").config();

//連線到資料庫
module.exports = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "tododb",
  multipleStatements: true, // 下多筆指令true
});
