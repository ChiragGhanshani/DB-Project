USE zootest;

INSERT INTO states(id, state_name)
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

INSERT INTO users
VALUES
	('khoffee', 'abc123', '2016-03-14', '1234-1234-1234', 'Customer', 'Y'),
	('cdog', 'abc123', '2016-04-24', '1234-5555-1234', 'Employee', 'Y'),
	('anabanana', '123abc', '2016-04-20', '1234-7777-1234', 'Employee', 'Y'),
	('ronak', 'hclc', '2016-01-01', '1234-7890-1234', 'Employee', 'Y');

INSERT INTO areas
VALUES(
	01,
	'Temperate Forest'
);

INSERT INTO employee_roles
VALUES
	(0, 'Keeper'),
	(1, 'Veterinarian'),
	(2, 'Manager');

INSERT INTO item_types
VALUES
	(01, 'Child', 12),
	(02, 'Adult', 15),
	(03, 'Senior', 10),
	(04, 'Single', 65),
	(05, 'Dual', 85),
	(06, 'Single Family', 110),
	(07, 'Family', 125),
	(08, 'Family Plus', 145),
	(09, 'Grandparent', 100);

INSERT INTO behaviors
VALUES
	(0, 'territorial'),
	(1, 'aggressive'),
	(2, 'docile'),
	(3, 'reclusive'),
	(4, 'social'),
	(5, 'Coy');

SET @manager_id_variable = uuid();
INSERT INTO employees
VALUES
	('1234-5555-1234', 'Clifford', 'The Dog', '1234 Imaginary Ln.', 'Made Up Ville',  /*state*/01, 12345, '000-000-0000', '1960-05-14', 'nothing@nothing.com', '123456789', @manager_id_variable, 1200, 0, 'Y'),
	('1234-7777-1234', 'Ana', 'Banana', '4800 Calhoun Rd.', 'Houston', 42, 77004, '123-456-7777', '2001-01-01', 'ana@banana.com', '123777123', @manager_id_variable, 1500, 1, 'Y'),
	('1234-7890-1234', 'Ronak', 'Shah', '123 Yolo Ln.', 'Houston', 42, 77072, '832-123-4567', '1969-04-20', 'ron@k.com', '123123123', @manager_id_variable, 2000, 2, 'Y');

INSERT INTO customers
VALUES(
	'1234-1234-1234',
	'Homer',
	'Simpson',
	'12420 Washington St.',
	'Houston',
	42,
	77072,
	'832-348-3887',
	'1960-05-14',
	'thesimpsons@springfield.com',
	'Y'
);

SET @transaction_id_variable = uuid();
INSERT INTO transactions
VALUES(
	@transaction_id_variable,
	'1234-1234-1234',
	'2016-01-02 00:00:00.000'
);

INSERT INTO transaction_items
VALUES(
	@transaction_id_variable,
	01,
	1
);

INSERT INTO areas(id, area)
VALUES
	(0, 'Rainforest'),
	(8, 'Savanna'),
	(2, 'Desert'),
	(3, 'Grasslands'),
	(4, 'Arctic'),
	(5, 'Saltwater'),
	(6, 'Freshwater'),
	(7, 'Jungle');

INSERT INTO species
VALUES(
	'Ailurus fulgens',
	5,
	'Mountain forest',
	'Herbivore',
	01 /*behavior*/
);

INSERT INTO habitats
VALUES(
	1,
	'1234-5555-1234',
	'2016-03-15 05:13:00',
	01 /*area*/
);

SET @tag_number_variable = uuid();
INSERT INTO animals
VALUES(
	@tag_number_variable,
	'Female',
	'2001-06-11',
	'1980-01-02',
	'2010-03-05',
	'2011-02-07',
	'2015-11-30',
	'A+',
	'Ailurus fulgens',
	1
);

INSERT INTO animal_illnesses
VALUES
	(@tag_number_variable, 'bAIDs', 'Acquisition of blue cubes by the animal\'s body. Upon acquiring three, the animal spreads it to the other animals in its exhibit'),
	(@tag_number_variable, 'rAIDs', 'Acquisition of red cubes by the animal\'s body. Upon acquiring three, the animal spreads it to the other animals in its exhibit'),
	(@tag_number_variable, 'blAIDs', 'Acquisition of black cubes by the animal\'s body. Upon acquiring three, the animal spreads it to the other animals in its exhibit'),
	(@tag_number_variable, 'yAIDs', 'Acquisition of yellow cubes by the animal\'s body. Upon acquiring three, the animal spreads it to the other animals in its exhibit'),
	(@tag_number_variable, 'AIDS', 'This red panda was perhaps a little too promiscuous in her youth...');

INSERT INTO animal_illnesses
VALUES(
	@tag_number_variable,
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
