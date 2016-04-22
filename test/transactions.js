var expect = require('chai').expect;
var db = require('../models/db.js');
var loginORM = require('../models/login.js');
var transactionORM = require('../models/transactionORM.js');

describe('transaction ORM test', function(){
  var membership_id = '1234-1234-1234';

  it('getUserID should return a uuid and a date', function(done){
    transactionORM.getUUID(function(error, result){
      expect(result['UUID()']).to.be.a('string');
      expect(result['UTC_DATE()']).to.be.a('date');
      done();
    });
  });
  it('insertTransaction should insert a transaction and its item', function(done){
    transactionORM.insertTransaction(membership_id, function(err, res){
      expect(res).to.be.a('string');
      transactionORM.insertTransactionItem(res, '01', 1, function(error, result){
        expect(error).to.be.eql(null);
      });
      done();
    });
  });
});
