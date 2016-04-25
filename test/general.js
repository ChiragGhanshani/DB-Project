var expect = require('chai').expect;
var db = require('../models/db.js');
var usersORM = require('../models/login.js');
var general = require('../models/general.js');

describe('general ORM test', function(){
  it('should return the whole table', function(done){
    general.selectTable('users', function(error, result){
      expect(Object.keys(result).length > 1).to.be.true;
      done();
    });
  });

  it('should update the user data', function(done){
    var initial;

    usersORM.getUserID('khoffee', 'abc123', function(error, result){
      expect(error).to.be.eql(null);
      initial = result[0].password;
      console.log(initial);
      general.updateTable('users', 'password', 'nope', 'username', 'khoffee', function(err, res){
        expect(err).to.be.eql(null);
        usersORM.getUserID('khoffee', 'nope', function(Error, Result){
          expect(Error).to.be.eql(null);
          expect(Result[0].password).to.not.eql(initial);
        });
      });
      done();
    });
  });
});
