var express = require('express');
var router = express.Router();
var transactionORM = require('../models/transactionORM.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('shoppingCart', { title: 'Shopping Cart' });
});

router.get('/completeTransaction', function(req, res, next){
  var transID;
  transactionORM.insertTransaction(req.query.ID.replace(/%2D/g, '-'), function(error, result){
    if(error){
      console.log(error);
      res.send(error);
    }
    else{
      console.log(result);
      transID = result;
      if(parseInt(req.query.item1) > 0) transactionORM.insertTransactionItem(transID, '01',
        parseInt(req.query.item1), function(err, results){
          if(err){
            res.send(err);
            return;
          }
        });
      if(parseInt(req.query.item2) > 0) transactionORM.insertTransactionItem(transID, '02',
        parseInt(req.query.item2), function(err, results){
          if(err){
            res.send(err);
            return;
          }
        });
      if(parseInt(req.query.item3) > 0) transactionORM.insertTransactionItem(transID, '03',
        parseInt(req.query.item3), function(err, results){
          if(err){
            res.send(err);
            return;
          }
        });
      if(parseInt(req.query.item4) > 0) transactionORM.insertTransactionItem(transID, '04',
        parseInt(req.query.item4), function(err, results){
          if(err){
            res.send(err);
            return;
          }
        });
      if(parseInt(req.query.item5) > 0) transactionORM.insertTransactionItem(transID, '05',
        parseInt(req.query.item5), function(err, results){
          if(err){
            res.send(err);
            return;
          }
        });
      if(parseInt(req.query.item6) > 0) transactionORM.insertTransactionItem(transID, '06',
        parseInt(req.query.item6), function(err, results){
          if(err){
            res.send(err);
            return;
          }
        });
      if(parseInt(req.query.item7) > 0) transactionORM.insertTransactionItem(transID, '07',
        parseInt(req.query.item7), function(err, results){
          if(err){
            res.send(err);
            return;
          }
        });
      if(parseInt(req.query.item8) > 0) transactionORM.insertTransactionItem(transID, '08',
        parseInt(req.query.item8), function(err, results){
          if(err){
            res.send(err);
            return;
          }
        });
      if(parseInt(req.query.item9) > 0) transactionORM.insertTransactionItem(transID, '09',
        parseInt(req.query.item9), function(err, results){
          if(err){
            res.send(err);
            return;
          }
        });
    }
  });
});

module.exports = router;
