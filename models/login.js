var db = require('./db.js');
var async = require('async');

module.exports = {
	getUserID : function(username, password, sendResultBack) {
		if(typeof username === "undefined" || typeof password === "undefined" || username == "" || password == "")
      sendResultBack(new Error('Invalid Credentials'), null);
		else
		{
      var queryString = 'select * from users where username = ? and password = ?';
      db.query(queryString, [username, password]).spread(function(rows) {
        if(rows.length > 0){
          sendResultBack(null, rows);
        }
        else{
          sendResultBack(new Error('Invalid query'), null);
        }
		  }).catch(function(error){
        sendResultBack(error, null)
      });
	  }
  }
}

