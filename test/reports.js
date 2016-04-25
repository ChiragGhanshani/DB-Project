var expect = require('chai').expect;
var db = require('../models/db.js');
var reportsORM = require('../models/reports.js');

describe('reports ORM test', function(){
  var membership_id = '1234-1234-1234';

  it('should return a list of animals', function(done){
    reportsORM.getAnimalsReportNoFilter(function(error, result){
      expect(error).to.be.eql(null);
    });
    done();
  });

  it('should return a list of animals filtered by keeperID', function(done){
    reportsORM.getAnimalsReportOneFilter('employee_id', '1234-5555-1234',
      function(error, result){
        expect(error).to.be.eql(null);
      });
    done();
  });
});
