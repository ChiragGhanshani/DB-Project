var db = require('./db.js');
var async = require('async');

module.exports = {
  getUUID : function(sendResultBack) {
    db.query('SELECT UUID(), UTC_DATE();').spread(function(rows) {
      if(rows.length < 1)
        sendResultBack(new Error('Invalid Query'), null);
      else{
        sendResultBack(null, rows[0]);
      }
    }).catch(function(error) {
      sendResultBack(error, null);
    });
  },
  insertTransaction : function(member_id, sendResultsBack) {
    if(typeof member_id === "undefined")
      sendResultsBack(new Error('Invalid data type'), null);
    else if(member_id == "")
      sendResultsBack(new Error('Empty Input'), null);

    else {
      var id = null;
      var date = null;
      this.getUUID(function(error, result){
        if (error) sendResultsBack(error, null);
        else{
          id = result['UUID()'];
          date = result['UTC_DATE()'];
          var transactionInsertString = 'INSERT INTO transactions(transaction_id, member_id, transaction_time) VALUES (?, ?, ?);';
          db.query(transactionInsertString, [id, member_id, date]).then(function(){
            sendResultsBack(null, id);
          }).catch(function(error){
            sendResultsBack(error, null);
          });
        }
      });
    }
  },
  insertTransactionItem : function(transaction_id, item_id, quantity, sendResultBack){
    if(typeof transaction_id === 'undefined' || typeof item_id === 'undefined' || typeof quantity === 'undefined') sendResultBack (new Error("invalid data type"), null);
    else if(transaction_id == '' || item_id == '' || quantity < 1) sendResultBack(new Error('Invalid input'), null);
    else{
      var itemInsertString = 'INSERT INTO transaction_items(trans_id, item_id, quantity) VALUES (?, ?, ?);';
      db.query(itemInsertString, [transaction_id, item_id, quantity]).then(function(){
        sendResultBack(null, null);
      }).catch(function(error){
        sendResultBack(error, null);
      });
    }
  }
}
