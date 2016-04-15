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
  req.connection.setTimeout(2000);
  var username = 'Shang';
  var password = '123';
  var firstName = 'Jing';
  var lastName = 'Mei';
  var streetAddress = 'Fuck';
  var city = 'This';
  var state = 0;
  var zipCode = 80085;
  var phoneNumber = '123-123-1234';
  var DOB = '1990-04-01';
  var email = 'bob@bob.com';

  console.log(username + password + firsName + lastName + streetAddress + city + state +
    req.query.zip + phoneNumber + DOB + email);

  registrationORM.insertCustomer(username, password, firstName, lastName, streetAddress, city,
    state, zipCode, phoneNumber, DOB, email, function(error, result){
    if (error) console.log(error);
    if (error) throw error;
    next();
  });
});

module.exports = router;
