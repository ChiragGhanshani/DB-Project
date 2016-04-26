var express = require('express');
var router = express.Router();
var reportsORM = require('../models/reports.js');

router.get('/', function(req, res, next) {
    res.render('manageEmployees', { title: 'Manage Employees' });
});

router.get('/getEmployees', function(req, res, next){
  reportsORM.getEmployeesReportNoFilter(function(error, result){
    if (error) res.send(error);
    else res.send(result);
  });
});

module.exports = router;
