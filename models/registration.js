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
  },
  insertCustomerUser : function(firstName, lastName, email, password, phoneNumber, email, dob, gender, streetAddress, zipCode, city, state, membershipType, sendResultBack){
  	if(typeof firstName === "undefined" || typeof lastName === "undefined" || typeof email 
        === "undefined"|| typeof password === "undefined" || typeof phoneNumber === "undefined" ||
        typeof email === "undefined" || typeof dob === "undefined" || typeof gender === "undefined"
        || typeof streetAddress === "undefined" || typeof zipCode === "undefined" || typeof city 
        === "undefined" || typeof state === "undefined" || typeof membershipType === "undefined")
  		sendResultBack(new Error('Invalid data type'), null);

  	else if( firstName == "" ||  lastName == "" ||  email == ""||  password == "" ||  phoneNumber 
        == "" ||  email == "" ||  dob == "" ||  gender == "" ||  streetAddress == "" ||  zipCode 
        == "" ||  city == "" || typeof state == "" || typeof membershipType == "")
  		sendResultBack(new Error('Empty input'), null);

  	else
  	{
  		var id = null;
  		getUUID(function(err, result){
  			id = result['UUID()'];
  		});
  		var createUUID = 'SET @';
  		var insertString = 'INSERT INTO customers(membership_id, customer_firstName, customer_lastName, customer_DOB, customer_email, membership_type) VALUES (?, ?, ?, ?, ?, ?)';
  		var insertion = db.query(insertString, [id, firstName, lastName, dob, email, membershipType], function(err, results){
  			if(err)
  				sendResultBack(new Error('Unable to insert data'), null);
  			else
  				sendResultBack(null, null);
  		});
  	}
  }
}
