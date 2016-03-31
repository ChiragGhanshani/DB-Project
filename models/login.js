var db = require('../models/db');

module.exports = {
	getUserID : function(username, password, sendResultBack) {
		if(typeof username === "undefined" || typeof password === "undefined" || username == "" || password == "")
			sendResultBack(new Error('Invalid Credentials'), null);
		else
		{
			var queryString = 'SELECT user_id FROM users WHERE username = ? AND password = ?';
		    var query = db.query(queryString, [username, password], function(err, rows, fields) {
			    if (err) {
			      return sendResultBack(err, null);
			    }
			    if (rows.length === 0) {
			      sendResultBack(new Error('no such user'));
			    } else
				  sendResultBack(null, rows[0].user_id);
		    });
		}
	}
}