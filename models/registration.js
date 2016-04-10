var db = require('./db.js');
var async = require('async');

module.exports = {
  getUUID : function(sendResultBack){
    db.query('SELECT UUID();', function(err, rows, fields){
      if(err) sendResultBack(new Error('Invalid Query'), null);
      if(rows.length < 1) sendResultBack(new Error('Invalid Query'), null);
      else{
        sendResultBack(null, rows[0]);
      }
    });
  }
}
