var db = require('./db.js');
var async = require('async');

module.exports = {
  insertUser : function(firstName, lastName, username, password, phonenumber, email, dob, gender,streetAddress, zipCode, city, state, membership_type){
    if()
      sendResultBack(new Error('kdsjflsdjf'), null);
    else
    {
      var insertString = 'INSERT INTO customers SET customer_firstName = ?, customer_lastName = ?, customer_DOB = ?,
                          customer_email = ?, membership_type = ?, customer_street_address = ?, customer_zipcode = ?,
                          customer_city = ?, customer_state = ?';
      var insertion = db.query(queryString, [firstName, lastName, dob, email, membership_type, streetAddress, zipCode, city, state], function(err, results){
        if(err)
          sendResultBack(new Error('Big ol error'), null);

      });
    }
  }
