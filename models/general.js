var db = require('./db.js');
var async = require('async');

module.exports = {

  selectTable : function(table, sendResultBack) {
    var queryString = 'SELECT * FROM ??;';
    db.query(queryString, [table]).spread(function(rows) {
      if(rows.length > 0) {
        sendResultBack(null, rows);
      }
    });
  },
  updateTable : function(table, column, value, whereColumn, whereValue, sendResultBack) {
    var queryString = 'UPDATE ?? SET ??=? WHERE ??=?;';
    db.query(queryString,[table, column, value, whereColumn, whereValue]).then(function() {
      sendResultBack(null, null);
    }).catch(function(error) {
      sendResultBack(error, null);
    });
  }
}
