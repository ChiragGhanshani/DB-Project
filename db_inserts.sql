USE zootest;


INSERT INTO employees
VALUES (
	000001,
	'Clifford',
	'The Dog',
	'1234 Imaginary Ln.',
	'Made Up Ville',
	01,
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
	'2016-01-02 00:00:00.000'
);

INSERT INTO transaction_items
VALUES(
	123,
	000000,
	'Khoiffee',
	1,
	100
);

INSERT INTO users
VALUES(
	'khoffee',
	'abc123',
	'2016-03-14',
	'Y',
	'ABD590',
	'Customer'
);

INSERT INTO species
VALUES (
	'Ailurus fulgens', 
	5,
	'Mountain forest',
	'Herbivore',
	04
);

INSERT INTO habitats
VALUES (
	1,
	000001,
	'2016-03-15 05:13:00',
	01
);

INSERT INTO animals 
VALUES(
	1234567,
	'Male',
	'2001-06-11',
	'1980-01-02',
	'2010-03-05',
	'2011-02-07',
	'2015-11-30',
	'O-',
	'Ailurus fulgens',
	1
);

INSERT INTO employee_roles(0, 'Keeper');
INSERT INTO employee_roles(1, 'Veterinarian');
INSERT INTO employee_roles(2, 'Manager');

INSERT INTO member_types(0, 'free');
INSERT INTO member_types(1, 'season member');
INSERT INTO member_types(2, 'one year member');
INSERT INTO member_types(3, 'Donor');

INSERT INTO item_types(0, 'day pass', 10);
INSERT INTO item_types(1, 'season membership', 50);
INSERT INTO item_types(2, 'one year membership', 150);
INSERT INTO item_types(3, 't-shirt', 15);
INSERT INTO item_types(4, 'back pack', 20);
INSERT INTO item_types(5, 'teddy bear', 15);

INSERT INTO behaviors(0, 'territorial');
INSERT INTO behaviors(1, 'aggressive');
INSERT INTO behaviors(2, 'docile');
INSERT INTO behaviors(3, 'reclusive');
INSERT INTO behaviors(4, 'social');

INSERT INTO animal_illnesses(1234567, 'bAIDs', 'Acquisition of blue cubes by the animal\'s body. Upon acquiring three, the animal spreads it to the other animals in its exhibit');
INSERT INTO animal_illnesses(1234567, 'rAIDs', 'Acquisition of red cubes by the animal\'s body. Upon acquiring three, the animal spreads it to the other animals in its exhibit');
INSERT INTO animal_illnesses(1234567, 'blAIDs', 'Acquisition of black cubes by the animal\'s body. Upon acquiring three, the animal spreads it to the other animals in its exhibit');
INSERT INTO animal_illnesses(1234567, 'yAIDs', 'Acquisition of yellow cubes by the animal\'s body. Upon acquiring three, the animal spreads it to the other animals in its exhibit');
