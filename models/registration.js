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
  insertCustomer : function(username, password, firstName, lastName, streetAddress, city, state, zipCode, phoneNumber, dob, email, sendResultBack) {
    if(username === "undefined" || password === "undefined" || firstName === "undefined" || lastName === "undefined" ||
        streetAddress === "undefined"|| typeof city === "undefined" || typeof state === "undefined" ||
        typeof zipCode === "undefined" || typeof phoneNumber === "undefined" || typeof dob === "undefined"
        || typeof email === "undefined")
        sendResultBack(new Error('Invalid data type'), null);

    else if(typeof username == "" || typeof password == "" || typeof firstName == "" || typeof lastName == "" || typeof streetAddress
        == ""|| typeof city == "" || typeof state == "" ||
        typeof zipCode == "" || typeof phoneNumber == "" || typeof dob == ""
        || typeof email == "")
        sendResultBack(new Error('Empty Input'), null);

    else {
      var id = null;
      var date = null;
      this.getUUID(function(error, result) {
        if(error){sendResultBack(error, null);}
        else{
          id = result['UUID()'];
          date = result['UTC_DATE()'];
          var userInsertionString = 'INSERT INTO users(username, password, date_created, user_id, role, active) VALUES (?, ?, ?, ?, ?, ?);';
          //var customerInsertionString = 'INSERT INTO customers(membership_id, customer_firstName, customer_lastName, customer_streetAddress, customer_city, customer_state, customer_zipCode, customer_phoneNumber, customer_DOB, customer_email, active) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);';
          var userInsertion = db.query(userInsertionString, [username, password, date, id, 'Customer', 'Y']).then(function() {
            var customerInsertionString = 'INSERT INTO customers(membership_id, customer_firstName, customer_lastName, customer_streetAddress, customer_city, customer_state, customer_zipCode, customer_phoneNumber, customer_DOB, customer_email, active) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);';
            //var userInsertionString = 'INSERT INTO users(username, password, date_created, user_id, role, active) VALUES (?, ?, ?, ?, ?, ?);';
            var customerInsertion = db.query(customerInsertionString, [id, firstName, lastName, streetAddress, city, state, zipCode, phoneNumber, dob, email, 'Y']).then(function() {
              sendResultBack(null, null);
            }).catch(function(error) {
              sendResultBack(error, null);
            });
          }).catch(function(error) {
            sendResultBack(error, null);
          });
        }
      });
    }
  },
  insertEmployee : function(username, password, firstName, lastName, streetAddress, city, state, zipCode, phoneNumber, dob, email, national_id, manager_id, salary, role, sendResultBack) {
    if(username === "undefined" || password === "undefined" || firstName === "undefined" || lastName === "undefined" || streetAddress === "undefined" ||
        city === "undefined" || state === "undefined" || zipCode === "undefined" || phoneNumber === "undefined" || dob === "undefined" ||
        email === "undefined" || national_id === "undefined" || manager_id === "undefined" || salary === "undefined" || role === "undefined")
      sendResultBack(new Error('Invalid data type'), null);

    else if(typeof username == "" || typeof password == "" || typeof firstName == "" || typeof lastName == "" || typeof streetAddress == ""|| typeof city == "" ||
            typeof state == "" || typeof zipCode == "" || typeof phoneNumber == "" || typeof dob == ""||
            typeof email == "" || typeof national_id == "" || typeof manager_id == "" || typeof salary == "" || typeof role == "")
      sendResultBack(new Error('Empty Input'), null);

    else {
      var id = null;
      var date = null;
      this.getUUID(function(error, result) {
        if(error){sendResultBack(error, null);}
        else{
          id = result['UUID()'];
          date = result['UTC_DATE()'];
          var userInsertionString = 'INSERT INTO users(username, password, date_created, user_id, role, active) VALUES (?, ?, ?, ?, ?, ?);';
          //var employeeInsertionString = 'INSERT INTO employees(employee_id, employee_firstname, employee_lastName, street_address, city, state, zipcode, phone_number, employee_dob, email, national_id, manager_id, salary, role, active) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);';
          var userInsertion = db.query(userInsertionString, [username, password, date, id, 'Employee', '1']).then(function() {
            var employeeInsertionString = 'INSERT INTO employees(employee_id, employee_firstname, employee_lastName, street_address, city, state, zipcode, phone_number, employee_dob, email, national_id, manager_id, salary, role, active) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);';
            //var userInsertionString = 'INSERT INTO users(username, password, date_created, user_id, role, active) VALUES (?, ?, ?, ?, ?, ?);';
            var employeeInsertion = db.query(employeeInsertionString, [id, firstName, lastName, streetAddress, city, state, zipCode, phoneNumber, dob, email, national_id, manager_id, salary, role, '1']).then(function() {
              sendResultBack(null, null);
            }).catch(function(error) {
              sendResultBack(error, null);
            });
          }).catch(function(error) {
            sendResultBack(error, null);
          });
        }
      });
    }
  }
}
