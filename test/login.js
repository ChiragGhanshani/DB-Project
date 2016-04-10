var expect = require('chai').expect;
var db = require('../models/db.js');
var loginORM = require('../models/login.js');

describe('login ORM test', function(){
  it('getUserID should return a userid', function(done){
    var parser = function(error, result){
      expect(result[0].user_id).to.eql('ABD590');
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
});