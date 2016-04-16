var mysql = require('mysql-promise')();
var connection = null;

mysql.configure({
  host : 'localhost',
  user : 'root',
  password : 'agile',
  database : 'zootest'
});

module.exports = mysql;
