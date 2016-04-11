/**
 * Created by Josef on 4/8/2016.
 */
var express = require('express');
var router = express.Router();
var db = require('../models/db');
var loginORM = require('../models/login');
var registrationORM = require('../models/registration');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/checkCredentials', function(req, res, next){
  var username = req.query.ID;
  var password = req.query.password;

  loginORM.getUserID(username, password, function(error, result){
    if(error) res.send('{"username" : "error"}');
    else res.send(result[0]);
    console.log(error);
    console.log(result);
  });
});

router.get('/registerUser', function(req, res, next){
  var username = req.query.userName;
  var password = req.query.passWord;
  var role = req.query.role;

  registrationORM.insertGenericUser(username, password, date, function(error, result){
    if (error) console.log(error);
    if (error) throw error;
  });
});

module.exports = router;
