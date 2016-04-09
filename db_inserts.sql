USE zootest;

INSERT INTO states
VALUES(
	01,
	'Alabama'
);

INSERT INTO member_types
VALUES(
	04,
	'Student'
);
	
INSERT INTO customers
VALUES(
	123456,
	'Homer',
	'Simpson',
	'1960-05-14',
	'thesimpsons@springfield.com',
	01 /*membership type*/
);

INSERT INTO transaction_types
VALUES(
	01,
	'Web transaction'
);

INSERT INTO transactions
VALUES(
	123,
	123456,
	01, /*trans type*/
	'2016-01-02 00:00:00.000'
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

INSERT INTO behaviors
VALUES(
	05,
	'Coy'
);

INSERT INTO species
VALUES(
	'Ailurus fulgens', 
	5,
	'Mountain forest',
	'Herbivore',
	01 /*behavior*/
);

INSERT INTO areas
VALUES(
	01,
	'Temperate Forest'
);

INSERT INTO habitats
VALUES(
	1,
	000001,
	'2016-03-15 05:13:00',
	01 /*area*/
);

INSERT INTO animals 
VALUES(
	1234567,
	'Female',
	'2001-06-11',
	'1980-01-02',
	'2010-03-05',
	'2011-02-07',
	'2015-11-30',
	'',
	'Ailurus fulgens',
	1
);

INSERT INTO employee_roles VALUES(0, 'Keeper');
INSERT INTO employee_roles VALUES(1, 'Veterinarian');
INSERT INTO employee_roles VALUES(2, 'Manager');

INSERT INTO member_types VALUES(0, 'free');
INSERT INTO member_types VALUES(1, 'season member');
INSERT INTO member_types VALUES(2, 'one year member');
INSERT INTO member_types VALUES(3, 'Donor');

INSERT INTO item_types VALUES(0, 'day pass', 10);
INSERT INTO item_types VALUES(1, 'season membership', 50);
INSERT INTO item_types VALUES(2, 'one year membership', 150);
INSERT INTO item_types VALUES(3, 't-shirt', 15);
INSERT INTO item_types VALUES(4, 'back pack', 20);
INSERT INTO item_types VALUES(5, 'teddy bear', 15);

INSERT INTO behaviors VALUES(0, 'territorial');
INSERT INTO behaviors VALUES(1, 'aggressive');
INSERT INTO behaviors VALUES(2, 'docile');
INSERT INTO behaviors VALUES(3, 'reclusive');
INSERT INTO behaviors VALUES(4, 'social');

INSERT INTO animal_illnesses(1234567, 'bAIDs', 'Acquisition of blue cubes by the animal\'s body. Upon acquiring three, the animal spreads it to the other animals in its exhibit');
INSERT INTO animal_illnesses(1234567, 'rAIDs', 'Acquisition of red cubes by the animal\'s body. Upon acquiring three, the animal spreads it to the other animals in its exhibit');
INSERT INTO animal_illnesses(1234567, 'blAIDs', 'Acquisition of black cubes by the animal\'s body. Upon acquiring three, the animal spreads it to the other animals in its exhibit');
INSERT INTO animal_illnesses(1234567, 'yAIDs', 'Acquisition of yellow cubes by the animal\'s body. Upon acquiring three, the animal spreads it to the other animals in its exhibit');
INSERT INTO animal_illnesses
VALUES(
	1234567,
	'AIDS',
	'This red panda was perhaps a little too promiscuous in her youth...'
);

INSERT INTO animal_illnesses
VALUES(
	1234567,
	'Flu',
	'She has been sniffling for days!'
);

INSERT INTO zoo_events
VALUES(
	1,
	'2016-04-11',
	'Class Presentation',
	'17:30:00',
	'19:00:00',
	null,
	'So soon...'
);

INSERT INTO transaction_items
VALUES(
	123,
	000000,
	1
);

INSERT INTO employees
VALUES(
	000001,
	'Clifford',
	'The Dog',
	'1234 Imaginary Ln.',
	'Made Up Ville',
	01, /*state*/
	12345,
	'000-000-0000',
	'nothing@nothing.com',
	'123456789',
	000001,
	1200,
	01 /*role*/
);

INSERT INTO state (id, state_name)
VALUES
	(0, 'AL'),
	(1, 'AK'),
	(2, 'AZ'),
	(3, 'AR'),
	(4, 'CA'),
	(5, 'CO'),
	(6, 'CT'),
	(7, 'DE'),
	(8, 'FL'),
	(9, 'GA'),
	(10, 'HI'),
	(11, 'ID'),
	(12, 'IL'),
	(13, 'IN'),
	(14, 'IA'),
	(15, 'KS'),
	(16, 'KY'),
	(17, 'LA'),
	(18, 'ME'),
	(19, 'MD'),
	(20, 'MA'),
	(21, 'MI'),
	(22, 'MN'),
	(23, 'MS'),
	(24, 'MO'),
	(25, 'MT'),
	(26, 'NE'),
	(27, 'NV'),
	(28, 'NH'),
	(29, 'NJ'),
	(30, 'NM'),
	(31, 'NY'),
	(32, 'NC'),
	(33, 'ND'),
	(34, 'OH'),
	(35, 'OK'),
	(36, 'OR'),
	(37, 'PA'),
	(38, 'RI'),
	(39, 'SC'),
	(40, 'SD'),
	(41, 'TN'),
	(42, 'TX'),
	(43, 'UT'),
	(44, 'VT'),
	(45, 'VA'),
	(46, 'WA'),
	(47, 'WV'),
	(48, 'WI'),
	(49, 'WY');

INSERT INTO areas(id, area)
VALUES
	(0, 'Rainforest'),
	(1, 'Savanna'),
	(2, 'Desert'),
	(3, 'Grasslands'),
	(4, 'Arctic'),
	(5, 'Saltwater'),
	(6, 'Freshwater'),
	(7, 'Jungle');

