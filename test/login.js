var expect = require('chai').expect;
var db = require('../models/db.js');
var loginORM = require('../models/login.js');

describe('login ORM test', function(){
  it('getUserID should return list', function(done){
    var parser = function(error, result){
      expect(result[0].user_id).to.eql('ABD590');
      done();
    }

    loginORM.getUserID('khoffee', 'abc123', parser);
  })
});
