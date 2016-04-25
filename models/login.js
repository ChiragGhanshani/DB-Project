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
  },
  getCustomerData : function(lookup_id, sendResultBack){
    if(typeof lookup_id === 'undefined' || lookup_id == '')
      sendResultBack(new Error('Invalid field'), null);
    else{
      var queryString = 'SELECT customers.*, states.state_name FROM customers INNER JOIN states ON customers.customer_state=states.id WHERE membership_id = ?';
      db.query(queryString, [lookup_id]).spread(function(rows){
        if(rows.length > 0) sendResultBack(null, rows);
        else sendResultBack(new Error('Entry not found'), null);
      }).catch(function(error){
          sendResultBack(error, null);
      });
    }
  },
  getEmployeeData : function(lookup_id, sendResultBack){
    if(typeof lookup_id === 'undefined' || lookup_id == '')
      sendResultBack(new Error('Invalid field'), null);
    else{
      var queryString = 'select employees.*, states.state_name, employee_roles.role_name FROM employees INNER JOIN states ON employees.state=states.id INNER JOIN employee_roles ON employees.role=employee_roles.id WHERE employee_id = ?';
      db.query(queryString, [lookup_id]).spread(function(rows){
        if(rows.length > 0) sendResultBack(null, rows);
        else sendResultBack(new Error('Entry not found'), null);
      }).catch(function(error){
          sendResultBack(error, null);
      });
    }
  }
}
