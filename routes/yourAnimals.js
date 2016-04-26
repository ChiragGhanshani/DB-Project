var express = require('express');
var router = express.Router();
var reportsORM = require('../models/reports.js');

router.get('/', function(req, res, next) {
    res.render('yourAnimals', { title: 'Your Animals' });
});

router.get('/getAnimals', function(req, res, next){
  var ID = req.query.ID.replace(/%2D/g, '-');
  reportsORM.getAnimalsReportOneFilter('employee_id', ID,
    function(err, result){
      if (err) throw err;
      else{
        res.send(result);
      }
    });
});

router.get('/getIllnesses', function(req, res, next){
  reportsORM.getIllnessesReportNoFilter(
    function(error, result){
      if (error) throw error;
      else{
        res.send(result);
      }
    });
});

router.get('/vetGetAnimals', function(req, res, next){
  reportsORM.getAnimalsReportNoFilter(function(error, result){
    if (error) throw error;
    else res.send(result);
  });
})

module.exports = router;
