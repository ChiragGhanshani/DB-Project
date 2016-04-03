var expect = require('chai').expect;
var db = require('../models/db.js');
var loginORM = require('../models/login.js');

describe('canary test', function(){
  it('canary should pass', function(){
    expect(1).to.eql(1);
  });
});
