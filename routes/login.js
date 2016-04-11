/**
 * Created by Josef on 4/8/2016.
 */
var express = require('express');
var router = express.Router();
var db = require('../models/db');
var loginORM = require('../models/login');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/checkCredentials', function(req, res, next){
  var username = req.query.ID;
  var password = req.query.password;

  loginORM.getUserID(username, password, function(error, result){
    if(error) res.send(error);
    else res.send(result[0]);
  });
});

router.get('/registerUser', function(req, res, next){
  var username = req.query.userName;
  var password = req.query.passWord;
  var date = req.query.date;
});

module.exports = router;
