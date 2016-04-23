var expect = require('chai').expect;
var db = require('../models/db.js');
var animalsORM = require('../models/animals.js');

describe('Animals ORM test', function() {
	it('getUUID should return a uuid and date', function(done) {
		animalsORM.getUUID(function(error, result) {
			expect(result['UUID()']).to.be.a('string');
			expect(result['UTC_DATE()']).to.be.a('date');
			done();
		});
	});

	it('Should insert animal into DB', function(done) {
		animalsORM.insertAnimal('Canis lupus familiaris', 2000, 'Grasslands', 'Omnivore', 'social', 'Male', '2016-04-20', 
			'2010-12-25', '2016-01-01', null, null, 'O-', 1, function(error, results) {
				expect(error).to.be.eql(null);
				done();
			});
	});

});