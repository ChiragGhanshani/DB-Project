var expect = require('chai').expect;
var db = require('../models/db.js');
var registrationORM = require('../models/registration.js');

describe('registration ORM test', function(){
  it('getUserID should return a uuid', function(done){
    registrationORM.getUUID(function(error, result){
      expect(result['UUID()']).to.be.a('string');
      done();
    });
  });

  it('Should Insert into DB', function(done){
    registrationORM.insertCustomer('Shang', '123', 'Jing', 'Mei', 'Fuck', 'This',
      0, 80085, '123-123-1234', '1990-04-01', 'bob@bob.com', function(error, result){
        expect(error).to.be.eql(null);
        done();
    });
  });
});
