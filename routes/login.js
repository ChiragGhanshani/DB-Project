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
  console.log("here brah");
  var username = req.query.username;
  var password = req.query.password;
  var firstName = req.query.firstName;
  var lastName = req.query.lastName;
  var streetAddress = req.query.street;
  var city = req.query.city;
  var state = parseInt(req.query.state);
  var zipCode = parseInt(req.query.zip);
  var phoneNumber = req.query.phone;
  var DOB = req.query.dob;
  var email = req.query.email.replace('%40', '@');

  console.log(email);
  console.log(DOB);
  console.log(phoneNumber);
  console.log(zipCode);
  console.log(state);
  console.log(city);
  console.log(streetAddress);
  console.log(lastName);
  console.log(firstName);
  console.log(password);
  console.log(username);

  registrationORM.insertCustomer(username, password, firstName, lastName, streetAddress, city,
    state, zipCode, phoneNumber, DOB, email, function(error, result){
    if (error) console.log(error);
    if (error) throw error;
    res.send();
  });
});

module.exports = router;
