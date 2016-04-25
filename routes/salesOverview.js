var express = require('express');
var router = express.Router();
var reportsORM = require('../models/reports.js');

router.get('/', function(req, res, next) {
    res.render('salesOverview', { title: 'Sales Overview' });
});

router.get('/getTransactions', function(req, res, next){
  reportsORM.getTransactionsReportNoFilter(function(error, result){
    if (error) throw error;
    else{
      res.send(result);
    }
  });
});

module.exports = router;
