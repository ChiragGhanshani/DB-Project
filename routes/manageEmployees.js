var express = require('express');
var router = express.Router();
var reportsORM = require('../models/reports.js');
var generalORM = require('../models/general.js');

router.get('/', function(req, res, next) {
    res.render('manageEmployees', { title: 'Manage Employees' });
});

router.get('/getEmployees', function(req, res, next){
  reportsORM.getEmployeesReportNoFilter(function(error, result){
    if (error) res.send(error);
    else res.send(result);
  });
});

router.get('/removeEmployee', function(req, res, next){
  var user = req.query.user;
  generalORM.updateTable('users', 'active', 0, 'username', user, function(error, result){
    if (error) throw (error);
    if (error) console.log(error);
  });
});

module.exports = router;
