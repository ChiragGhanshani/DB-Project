var db = require('./db.js')
var async = require('async')

module.exports = {
  getUUID : function(sendResultBack) {
    db.query('SELECT UUID(), UTC_DATE();').spread(function(rows) {
      if(rows.length < 1)
        sendResultBack(new Error('Invalid Query'), null);
      else {
        sendResultBack(null, rows[0]);
      }
    }).catch(function(error) {
      sendResultBack(error, null);
    });
  },
  insertAnimal : function(scientificName, population, naturalHabitat, diet, behavior, gender, last_checkup, date_of_birth, date_of_arrival, date_deceased, date_of_departure, blood_type, habitat_id, sendResultBack) {
    if([typeof scientificName, typeof population, typeof naturalHabitat, typeof diet, typeof behavior, typeof gender, typeof last_checkup, typeof date_of_birth,
      typeof date_of_arrival, typeof date_deceased, typeof date_of_departure, typeof blood_type, typeof habitat_id].indexOf("undefined") >= 0)
        sendResultBack(new Error('Invalid data type'), null);

    else if([scientificName, population, naturalHabitat, diet, behavior, gender, last_checkup, date_of_birth, date_of_arrival, date_deceased, date_of_departure, blood_type, habitat_id].indexOf("") >= 0)
      sendResultBack(new Error('Invalid input'), null);

    else {
      var id = null;
      var date = null;
      this.getUUID(function(error, result) {
        if(error)
          sendResultBack(error, null);
        else {
          id = result['UUID()'];
          date = result['UTC_DATE()'];
          var speciesInsertionString = 'INSERT INTO species(scientific_name, population, natural_habitat, diet, behavior) VALUES (?, ?, ?, ?, ?);';
          var speciesInsertion = db.query(speciesInsertionString, [scientificName, population, naturalHabitat, diet, behavior]).then(function() {
            var animalsInsertionString = 'INSERT INTO animals(tag_number, gender, last_checkup, date_of_birth, date_of_arrival, date_deceased, date_of_departure, blood_type, species, habitat_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);';
            var animalsInsertion = db.query(animalsInsertionString, [id, gender, last_checkup, date_of_birth, date_of_arrival, date_deceased, date_of_departure, blood_type, scientificName, habitat_id]).then(function() {
              sendResultBack(null, null);
            }).catch(function(error) {
              sendResultBack(error, null);
            });
          }).catch(function(error) {
            sendResultBack(error, null);
          });
        }
      });
    }
  }
}
