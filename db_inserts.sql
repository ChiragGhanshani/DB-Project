USE zootest;


INSERT INTO employees
VALUES (
	000001,
	'Clifford',
	'The Dog',
	'1234 Imaginary Ln.',
	'Made Up Ville',
	'ZZ',
	12345,
	'000-000-0000',
	'nothing@nothing.com',
	'123456789',
	000001,
	12,
	'00'
);
	
INSERT INTO customers
VALUES(
	123456,
	'Homer',
	'J',
	'Simpson',
	'1960-05-14',
	'thesimpsons@springfield.com',
	01
);

INSERT INTO transactions
VALUES(
	123,
	123456,
	00,
	'2016-01-02 00:00:00.000',
	02,
	50
);

INSERT INTO users
VALUES(
	'khoffee',
	'abc123',
	'2016-03-14',
	'Y',
	'ABD590',
	00
);

INSERT INTO species
VALUES (
	'Ailurus fulgens', 
	5,
	/*'Mountain forest',*/
	03,
	04
);

INSERT INTO habitats
VALUES (
	1,
	000001,
	'Cougar',
	'2016-03-15 05:13:00',
	01
);

INSERT INTO animals 
VALUES(
	1234567,
	'M',
	01,
	'2001-06-11',
	77,
	'1980-01-02',
	'2010-03-05',
	'2011-02-07',
	'2015-11-30',
	'O-',
	'Ailurus fulgens',
	1
);


