var expect = require('chai').expect;
var db = require('../models/db.js');
var loginORM = require('../models/login.js');

describe('login ORM test', function(){
  it('getUserID should return a userid', function(done){
    var parser = function(error, result){
      expect(result['0'].user_id).to.be.a('string');
      done();
    }

    loginORM.getUserID('khoffee', 'abc123', parser);
  })

  it('should return an error when an empty string is queried', function(done){
    var parser = function(error, result){
      expect(error).to.be.an('error');
      done();
    }

    loginORM.getUserID('', '', parser);
  });

  it('should return an error when a non-existant entry is queried', function(done){
    var parser = function(error, result){
      expect(error).to.be.an('error');
      done();
    }

    loginORM.getUserID('bapalabada', 'quintus', parser);
  });

  it('Should find the customer', function(done){
    loginORM.getCustomerData('1234-1234-1234', function(error, result){
      expect(result[0].customer_firstName).to.be.a('string');
      done();
    });
  });

  it('should find the employee', function(done){
    loginORM.getEmployeeData('1234-5555-1234', function(error, result){
      expect(result[0].employee_id).to.be.a('string');
      done();
    });
  });
});
