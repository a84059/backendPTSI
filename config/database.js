const mysql = require("mysql");

module.exports = {
 con:mysql.createConnection({
  host: 'sql213.main-hosting.eu',
  user: 'u157010430_AR',
  password: 'u157010430_ARpass',
  database: 'u157010430_arterupestre'
 })

 };
 