var db = require('./db.js');
var async = require('async');

module.exports = {
  getTransactionsReportNoFilter : function(sendResultBack) {
    var queryString = 'SELECT TRAN.transaction_id, IT.item_type, IT.id, IT.item_cost, TRAN_ITEM.quantity, TRAN.transaction_time FROM transactions AS TRAN, item_types AS IT, transaction_items AS TRAN_ITEM;';
    db.query(queryString).spread(function(rows) {
      if(rows.length > 0) {
        sendResultBack(null, rows);
      }
    });
  },
  getTransactionsReportOneFilter : function(column ,value, sendResultBack) {
    if([typeof column, typeof value].indexOf("undefined") >= 0)
      sendResultBack(new Error('Invalid filter'), null);
    else {
      var queryString = 'SELECT TRAN.transaction_id, IT.item_type, IT.id, IT.item_cost, TRAN_ITEM.quantity, TRAN.transaction_time FROM transactions AS TRAN, item_types AS IT, transaction_items AS TRAN_ITEM WHERE ? = ?;';
      db.query(queryString, [column, value]).spread(function(rows) {
        if(rows.length > 0) {
          sendResultBack(null, rows);
        }
      });
    }
  },
  getTransactionsReportTwoFilters : function(column1, value1, column2, value2, sendResultBack) {
    if([typeof column1, typeof value1, typeof column2, typeof value2].indexOf("undefined") >= 0)
      sendResultBack(new Error('Invalid filter'), null);
    else {
      var queryString = 'SELECT TRAN.transaction_id, IT.item_type, IT.id, IT.item_cost, TRAN_ITEM.quantity, TRAN.transaction_time FROM transactions AS TRAN, item_types AS IT, transaction_items AS TRAN_ITEM WHERE ? = ? AND ? = ?;';
      db.query(queryString, [column, value]).spread(function(rows) {
        if(rows.length > 0) {
          sendResultBack(null, rows);
        }
      });
    }
  },
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
      var queryString = 'SELECT * FROM animal_illnesses WHERE ? = ?;';
      db.query(queryString, [column, value]).spread(function(rows) {
        if(rows.length > 0) {
          sendResultBack(null, rows);
        }
      });
    }
  },
  getIllnessesReportTwoFilters : function(column1, value1, column2, value2, sendResultBack) {
    if([typeof column1, typeof value1, typeof column2, typeof value2].indexOf("undefined") >= 0)
      sendResultBack(new Error('Invalid filter'), null);
    else {
      var queryString = 'SELECT * FROM animal_illnesses WHERE ? = ? AND ? = ?;';
      db.query(queryString, [column, value]).spread(function(rows) {
        if(rows.length > 0) {
          sendResultBack(null, rows);
        }
      });
    }
  },
  getEmployeesReportNoFilter : function(sendResultBack) {
    var queryString = 'SELECT employee_id AS "Employee ID", employee_firstname AS "First Name", employee_lastname AS "Last Name", salary, manager_id AS "Manager ID" FROM employees;';
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
      var queryString = 'SELECT employee_id AS "Employee ID", employee_firstname AS "First Name", employee_lastname AS "Last Name", salary, manager_id AS "Manager ID" FROM employees WHERE ? = ?;';
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
      var queryString = 'SELECT employee_id AS "Employee ID", employee_firstname AS "First Name", employee_lastname AS "Last Name", salary, manager_id AS "Manager ID" FROM employees WHERE ? = ? AND ? = ?;';
      db.query(queryString, [column, value]).spread(function(rows) {
        if(rows.length > 0) {
          sendResultBack(null, rows);
        }
      });
    }
  },
}
