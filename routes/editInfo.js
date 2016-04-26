var express = require('express');
var router = express.Router();
var loginORM = require('../models/login.js');
var updateORM = require('../models/general.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('editInfo', { title: 'Edit Information' });
});

router.get('/editAddress', function(req, res, next){
  var ID = req.query.ID.replace(/%2D/g, '-');
  var addr = req.query.address;
  var city = req.query.city;
  var state = parseInt(req.query.state);
  var zip = parseInt(req.query.zip);
  updateORM.updateTable('customers', 'customer_streetAddress', addr,
    'membership_id', ID, function(error, result){
      if (error) throw error;
      else{
        updateORM.updateTable('customers', 'customer_city', city,
          'membership_id', ID, function(err, Result){
            if(err) throw err;
            else{
              updateORM.updateTable('customers', 'customer_state', state,
                'membership_id', ID, function(Error, Results){
                  if(Error) throw Error;
                  else{
                    updateORM.updateTable('customers', 'customer_zipCode',
                      zip, 'membership_id', ID, function(Err, results){
                        if(Err) throw Err;
                      });
                  }
              });
            }
        });
      }
  });
});

router.get('/editEmail', function(req, res, next){
  var ID = req.query.ID.replace(/%2D/g, '-');
  var email = req.query.email.replace(/%40/g, '@');
  updateORM.updateTable('customers', 'customer_email', email,
    'membership_id', ID, function(error, result){
      console.log('made it');
      if (error) throw error;
    });
});

router.get('/updatePass', function(req, res, next){
  var username = req.query.username;
  var password = req.query.pass;
  var newPass = req.query.newpass;
  loginORM.getUserID(username, password, function(error, result){
    if (error) throw error;
    else{
      updateORM.updateTable('users', 'password', newPass, 'username',
        username, function(err, results){
          console.log(err);
          if (err) throw error;
        });
    }
  }); 
});

router.get('/updatePhone', function(req, res, next){
  var ID = req.query.ID.replace(/%2D/g, '-');
  var phone = req.query.phone.replace(/%2D/g, '-');
  updateORM.updateTable('customers', 'customer_phoneNumber', phone,
    'membership_id', ID, function(error, result){
      if (error) throw error;
    });
});

module.exports = router;
