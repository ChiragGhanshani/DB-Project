npm install
mysql -uroot -pagile < db.sql && mysql -uroot -pagile < db_inserts.sql && mysql -uroot -pagile < db_triggers.sql
node node_modules/istanbul/lib/cli.js cover node_modules/mocha/bin/_mocha -- --timeout 5000 --recursive test/
