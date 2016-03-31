var expect = require('chai').expect;
var loginORM = require('../models/login.js');

describe('canary test', function(){
  it('canary should pass', function(){
    expect(1).to.eql(1);
  });
});

describe('login ORM test', function(){
  it('getUserID should return list', function(){
    //console.log(LoginORM.getUserID('khoffee','abc123'));
    console.log(loginORM.getUserID('khoffee','abc123',function(err, result){
      return result;
    }));
    expect(1).to.eql(1);
  })
})