var db = require('../models/db');
var async = require('async');

module.exports = {
	getUserID : function(username, password, sendResultBack) {
		if(typeof username === "undefined" || typeof password === "undefined" || username == "" || password == "")
			sendResultBack(new Error('Invalid Credentials'), null);
			//return 'no';
		else
		{
			var queryString = 'SELECT user_id FROM users WHERE username = \'' + username + '\' AND password = \''
				+ password + '\';';
			//return queryString;
			//var query = db.query();
		    var query = db.query(queryString, function(err, rows, fields) {
				return "hmm?";
			    if (err) {
					return sendResultBack(err, null);
			      //return err;
			    }
			    if (rows.length === 0) {
					sendResultBack(new Error('No such user'));
			      //return (new Error('no such user'));
			    } else
					sendResultBack(null,rows[0].username);
				  //return 'please';
		    });
		}
	}
}