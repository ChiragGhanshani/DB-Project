var express = require('express');
var router = express.Router();
var transactionORM = require('../models/transactionORM.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('shoppingCart', { title: 'Shopping Cart' });
});

router.get('/completeTransaction', function(req, res, next){
  var transID;
  transactionORM.insertTransaction(req.query.user.replace('%2D', '-'), function(error, result){
    if(error) res.send(error);
    else{
      transID = result;
      if(parseInt(req.query.item1) > 0) transactionORM.insertTransactionItem(transID, 1,
        parseInt(req.query.item1), function(error, result){
          if(error){
            res.send(error);
            return;
          }
        });
      if(parseInt(req.query.item2) > 0) transactionORM.insertTransactionItem(transID, 2,
        parseInt(req.query.item2), function(error, result){
          if(error){
            res.send(error);
            return;
          }
        });
      if(parseInt(req.query.item3) > 0) transactionORM.insertTransactionItem(transID, 3,
        parseInt(req.query.item3), function(error, result){
          if(error){
            res.send(error);
            return;
          }
        });
      if(parseInt(req.query.item4) > 0) transactionORM.insertTransactionItem(transID, 4,
        parseInt(req.query.item4), function(error, result){
          if(error){
            res.send(error);
            return;
          }
        });
      if(parseInt(req.query.item5) > 0) transactionORM.insertTransactionItem(transID, 5,
        parseInt(req.query.item5), function(error, result){
          if(error){
            res.send(error);
            return;
          }
        });
      if(parseInt(req.query.item6) > 0) transactionORM.insertTransactionItem(transID, 6,
        parseInt(req.query.item6), function(error, result){
          if(error){
            res.send(error);
            return;
          }
        });
      if(parseInt(req.query.item7) > 0) transactionORM.insertTransactionItem(transID, 7,
        parseInt(req.query.item7), function(error, result){
          if(error){
            res.send(error);
            return;
          }
        });
      if(parseInt(req.query.item8) > 0) transactionORM.insertTransactionItem(transID, 8,
        parseInt(req.query.item8), function(error, result){
          if(error){
            res.send(error);
            return;
          }
        });
      if(parseInt(req.query.item9) > 0) transactionORM.insertTransactionItem(transID, 9,
        parseInt(req.query.item9), function(error, result){
          if(error){
            res.send(error);
            return;
          }
        });
    }
  });
});

module.exports = router;
