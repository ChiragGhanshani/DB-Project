var expect = require('chai').expect;
var db = require('../models/db.js');
var registrationORM = require('../models/registration.js');

describe('registration ORM test', function(){
  it('getUserID should return a uuid', function(done){
    registrationORM.getUUID(function(error, result){
      expect(result['UUID()']).to.be.a('string');
      expect(result['UTC_DATE()']).to.be.a('date');
      done();
    });
  });

  it('Should Insert Customer into DB', function(done){
    registrationORM.insertCustomer('Shang', '123', 'Jing', 'Mei', 'Fuck', 'This',
      0, 80085, '123-123-1234', '1990-04-01', 'bob@bob.com', function(error, result){
        expect(error).to.be.eql(null);
        done();
    });
  });

  it('Should insert employee into DB', function(done){
    registrationORM.insertEmployee('Ranger', 'DeadPool', 'Wolverine', 'Smith',
      '101 Marvel Lane', 'Houston', 1, 77004, '800-273-8255', '1989-04-01',
       'kim@kimson.com', '123456789', 'NULL', 60000, 0, function(error, result){
        expect(error).to.be.eql(null);
        done();
    });
  });
});
