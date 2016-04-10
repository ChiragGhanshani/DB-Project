var expect = require('chai').expect;
var db = require('../models/db.js');
var registrationORM = require('../models/registration.js');

describe('login ORM test', function(){
  it('getUserID should return a uuid', function(done){
    registrationORM.getUUID(function(error, result){
      expect(result['UUID()']).to.be.a('string');
      done();
    });
  });
});
