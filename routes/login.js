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
  });
});

router.get('/getCustomer', function(req, res, next){
  var ID = req.query.ID;

  loginORM.getCustomerData(ID, function(error, result){
    if(error) res.send('{"customer_firstName" : "error"}');
    else res.send(result[0]);
  });
});

router.get('/getEmployee', function(req, res, next){
  var ID = req.query.ID;
  loginORM.getEmployeeData(ID, function(error, result){
    console.log(error);
    if(error) res.send('{"employee_firstname" : "error"}');
    else res.send(result[0]);
  });
});

router.get('/registerUser', function(req, res, next){
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

  registrationORM.insertCustomer(username, password, firstName, lastName, streetAddress, city,
    state, zipCode, phoneNumber, DOB, email, function(error, result){
    if (error) console.log(error);
    if (error) throw error;
    res.send();
  });
});

router.get('/registerEmployee', function(req, res, next){
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
  var nationalID = parseInt(req.query.nationalID);
  var managerID = req.query.managerID;
  var salary = parseInt(req.query.salary);
  var role = parseInt(req.query.role);

  registrationORM.insertEmployee(username, password, firstName, lastName,
    streetAddress, city, state, zipCode, phoneNumber, DOB, email,
    nationalID, managerID, salary, role, function(error, result){
      if(error) console.log(error);
      if(error) throw error;
      res.send();
    });
});

module.exports = router;
