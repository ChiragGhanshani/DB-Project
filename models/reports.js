var db = require('./db.js');
var async = require('async');

module.exports = {
  /****transaction reporting****/

  getTransactionsReportNoFilter : function(sendResultBack) {
    var queryString = 'SELECT TRAN.transaction_id, IT.item_type, IT.id, IT.item_cost, TRAN_ITEM.quantity, (IT.item_cost * TRAN_ITEM.quantity) AS total, TRAN.transaction_time FROM transactions AS TRAN INNER JOIN transaction_items AS TRAN_ITEM ON TRAN.transaction_id=TRAN_ITEM.trans_id INNER JOIN item_types AS IT ON TRAN_ITEM.item_id=IT.id;';
    db.query(queryString).spread(function(rows) {
      if(rows.length > 0)
        sendResultBack(null, rows);
      else
        sendResultBack(new Error('Invalid Values'), null);
    }).catch(function(error){
      sendResultBack(error, null);
    });
  },
  getTransactionsReportOneFilter : function(column ,value, sendResultBack) {
    if([typeof column, typeof value].indexOf("undefined") >= 0)
      sendResultBack(new Error('Invalid filter'), null);
    else {
      var queryString = 'SELECT TRAN.transaction_id, IT.item_type, IT.id, IT.item_cost, TRAN_ITEM.quantity, (IT.item_cost * TRAN_ITEM.quantity) AS total, TRAN.transaction_time FROM transactions AS TRAN INNER JOIN transaction_items AS TRAN_ITEM ON TRAN.transaction_id=TRAN_ITEM.trans_id INNER JOIN item_types AS IT ON TRAN_ITEM.item_id=IT.id WHERE ?? = ?;';
      db.query(queryString, [column, value]).spread(function(rows) {
        if(rows.length > 0)
          sendResultBack(null, rows);
        else
          sendResultBack(new Error('Invalid Values'), null);
      }).catch(function(error){
        sendResultBack(error, null);
      });
    }
  },
  getTransactionsReportTwoFilters : function(column1, value1, column2, value2, sendResultBack) {
    if([typeof column1, typeof value1, typeof column2, typeof value2].indexOf("undefined") >= 0)
      sendResultBack(new Error('Invalid filter'), null);
    else {
      var queryString = 'SELECT TRAN.transaction_id, IT.item_type, IT.id, IT.item_cost, TRAN_ITEM.quantity, (IT.item_cost * TRAN_ITEM.quantity) AS total, TRAN.transaction_time FROM transactions AS TRAN INNER JOIN transaction_items AS TRAN_ITEM ON TRAN.transaction_id=TRAN_ITEM.trans_id INNER JOIN item_types AS IT ON TRAN_ITEM.item_id=IT.id WHERE ?? = ? AND ?? = ?;';
      db.query(queryString, [column, value]).spread(function(rows) {
        if(rows.length > 0)
          sendResultBack(null, rows);
        else
          sendResultBack(new Error('Invalid Filter'), null);
      }).catch(function(error){
        sendResultBack(error, null);
      });
    }
  },

  /****illness reporting****/


  getIllnessesReportNoFilter : function(sendResultBack) {
      var queryString = 'SELECT * FROM animal_illnesses;';
      db.query(queryString).spread(function(rows) {
        if(rows.length > 0) {
          sendResultBack(null, rows);
        }
      });
  },
  getIllnessesReportOneFilter : function(column, value, sendResultBack) {
    if([typeof column, typeof value].indexOf("undefined") >= 0)
      sendResultBack(new Error('Invalid filter'), null);
    else {
      var queryString = 'SELECT * FROM animal_illnesses WHERE ?? = ?;';
      db.query(queryString, [column, value]).spread(function(rows) {
        if(rows.length > 0)
          sendResultBack(null, rows);
        else
          sendResultBack(new Error('Invalid Values'), null);
      }).catch(function(error){
        sendResultBack(error, null);
      });
    }
  },
  getIllnessesReportTwoFilters : function(column1, value1, column2, value2, sendResultBack) {
    if([typeof column1, typeof value1, typeof column2, typeof value2].indexOf("undefined") >= 0)
      sendResultBack(new Error('Invalid filter'), null);
    else {
      var queryString = 'SELECT * FROM animal_illnesses WHERE ?? = ? AND ?? = ?;';
      db.query(queryString, [column, value]).spread(function(rows) {
        if(rows.length > 0)
          sendResultBack(null, rows);
        else
          sendResultBack(new Error('Invalid Values'), null);
      }).catch(function(error){
        sendResultBack(error, null);
      });
    }
  },

  /****employee reporting****/


  getEmployeesReportNoFilter : function(sendResultBack) {
    var queryString = 'SELECT employee_id AS Employee_ID, employee_firstname AS First_Name, employee_lastname AS Last_Name, salary, manager_id AS Manager_ID FROM employees;';
    db.query(queryString).spread(function(rows) {
      if(rows.length > 0) {
        sendResultBack(null, rows);
      }
    });
  },
  getEmployeesReportOneFilter : function(column ,value, sendResultBack) {
    if([typeof column, typeof value].indexOf("undefined") >= 0)
      sendResultBack(new Error('Invalid filter'), null);
    else {
      var queryString = 'SELECT employee_id AS Employee_ID, employee_firstname AS First_Name, employee_lastname AS Last_Name, salary, manager_id AS Manager_ID FROM employees WHERE ?? = ?;';
      db.query(queryString, [column, value]).spread(function(rows) {
        if(rows.length > 0) {
          sendResultBack(null, rows);
        }
      });
    }
  },
  getEmployeesReportTwoFilters : function(column1, value1, column2, value2, sendResultBack) {
    if([typeof column1, typeof value1, typeof column2, typeof value2].indexOf("undefined") >= 0)
      sendResultBack(new Error('Invalid filter'), null);
    else {
      var queryString = 'SELECT employee_id AS Employee_ID, employee_firstname AS First_Name, employee_lastname AS Last_Name, salary, manager_id AS Manager_ID FROM employees WHERE ?? = ? AND ?? = ?;';
      db.query(queryString, [column, value]).spread(function(rows) {
        if(rows.length > 0) {
          sendResultBack(null, rows);
        }
      });
    }
  },

  /****customer reporting****/

  getCustomersReportNoFilter : function(sendResultBack) {
    var queryString = 'SELECT * FROM customers;'; //I feel like we can process this on client side rather than limiting the data returned arbitrarily from this side...
    db.query(queryString).spread(function(rows) {
      if(rows.length > 0) {
        sendResultBack(null, rows);
      }
    });
  },
  getCustomersReportOneFilter : function(column ,value, sendResultBack) {
    if([typeof column, typeof value].indexOf("undefined") >= 0)
      sendResultBack(new Error('Invalid filter'), null);
    else {
      var queryString = 'SELECT * FROM customers WHERE ?? = ?;';
      db.query(queryString, [column, value]).spread(function(rows) {
        if(rows.length > 0) {
          sendResultBack(null, rows);
        }
      });
    }
  },
  getCustomersReportTwoFilters : function(column1, value1, column2, value2, sendResultBack) {
    if([typeof column1, typeof value1, typeof column2, typeof value2].indexOf("undefined") >= 0)
      sendResultBack(new Error('Invalid filter'), null);
    else {
      var queryString = 'SELECT * FROM customers WHERE ? = ?? AND ?? = ?;';
      db.query(queryString, [column, value]).spread(function(rows) {
        if(rows.length > 0)
          sendResultBack(null, rows);
        else
          sendResultBack(new Error('Invalid Query'), null);
      }).catch(function(error){
        sendResultBack(error, null);
      });
    }
  },

  /****animal reporting****/

  getAnimalsReportNoFilter : function(sendResultBack) {
    var queryString = 'SELECT * FROM animals INNER JOIN habitats ON animals.habitat_id=habitats.habitat_id;'; //I feel like we can process this on client side rather than limiting the data returned arbitrarily from this side...
    db.query(queryString).spread(function(rows) {
      if(rows.length > 0)
        sendResultBack(null, rows);
      else
        sendResultBack(new Error('Invalid values'), null);
    }).catch(function(error){
      sendResultBack(error, null);
    });
  },
  getAnimalsReportOneFilter : function(column ,value, sendResultBack) {
    if([typeof column, typeof value].indexOf("undefined") >= 0)
      sendResultBack(new Error('Invalid filter'), null);
    else {
      var queryString = 'SELECT * FROM animals INNER JOIN habitats ON animals.habitat_id=habitats.habitat_id WHERE ?? = ?;';
      db.query(queryString, [column, value]).spread(function(rows) {
        if(rows.length > 0)
          sendResultBack(null, rows);
        else
          sendResultBack(new Error('Invalid Values'), null);
      }).catch(function(error){
        sendResultBack(error, null);
      });
    }
  },
  getAnimalsReportTwoFilters : function(column1, value1, column2, value2, sendResultBack) {
    if([typeof column1, typeof value1, typeof column2, typeof value2].indexOf("undefined") >= 0)
      sendResultBack(new Error('Invalid filter'), null);
    else {
      var queryString = 'SELECT * FROM animals INNER JOIN habitats ON animals.habitat_id=habitats.habitat_id WHERE ?? = ? AND ?? = ?;';
      db.query(queryString, [column, value]).spread(function(rows) {
        if(rows.length > 0)
          sendResultBack(null, rows);
        else
          sendResultBack(new Error('Invaild Values'), null);
      }).catch(function(error){
        sendResultBack(error, null);
      });
    }
  },
}
