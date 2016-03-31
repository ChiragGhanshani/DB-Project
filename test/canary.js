var expect = require('chai').expect;
var db = require('../models/db.js');
var loginORM = require('../models/login.js');

describe('canary test', function(){
  it('canary should pass', function(){
    expect(1).to.eql(1);
  });
});

describe('login ORM test', function(){
  it('getUserID should return list', function(){
    var parser = function(error, result){
      expect(result[0].user_id).to.eql('ABD590');
    }

    loginORM.getUserID('khoffee', 'abc123', parser);

    expect(1).to.eql(1);
  })
})
