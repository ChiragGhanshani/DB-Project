var db = require('./db.js');
var async = require('async');

module.exports = {
	getUserID : function(username, password, sendResultBack) {
		if(typeof username === "undefined" || typeof password === "undefined" || username == "" || password == "")
      sendResultBack(new Error('Invalid Credentials'), null);
		else
		{
			var queryString = 'SELECT * FROM users WHERE username = ? AND password = ?;';
		  var query = db.query(queryString, [username, password], function(err, rows, fields) {
			  if (err)
          sendResultBack(new Error('Invalid Credentials'), null);

        else if (rows.length > 0)
          sendResultBack(null, rows);
		  });
	  }
  }
}

