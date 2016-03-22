DROP DATABASE IF EXISTS zootest;
CREATE DATABASE zootest;
USE zootest;
CREATE TABLE IF NOT EXISTS employee(
	employee_id int(6) NOT NULL, #added length constraint for id values
	employee_firstname varchar(15),
	employee_lastname varchar(15),
	street_address varchar(25),
	city varchar(22),
	state varchar(2),
	zipcode int(5) NOT NULL, #limited zip to 5 digits - this is all we need to care about
	phone_number varchar(12),
	email varchar(40),
	national_id varchar(20),
	manager_id int(6) NOT NULL,
	salary int NOT NULL,
	role varchar(10),

	PRIMARY KEY (employee_ID) #had forgotten completely to add this constraint
);

INSERT INTO employee
VALUES (000001,
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
	'Mascot');

/* So I was confused with the given specification as to what the following table was meant to represent.
I assume here that it refers to specific physical habitats in which animals are shown/live and
which are cared for by (apparently) a single keeper. To this end, I added habitat_id as primary key
and use the keeper's id as foreign key relating this physical habitat to a keeper employee...
This is all very much subject to change and discussion!*/

CREATE TABLE IF NOT EXISTS habitats(
	habitat_id int NOT NULL,
	employee_id int(6) NOT NULL,
	species varchar(20) NOT NULL,
	area varchar(20),

	PRIMARY KEY (habitat_id),
	FOREIGN KEY (employee_id) REFERENCES employee(employee_id)
	#may want to also use species as a foreign key referencing species table (once it exists)...
);

INSERT INTO habitats
VALUES (0001, 000001, 'Cougar', 'Savannah');



/*Species table inserted by Ana*/

CREATE TABLE IF NOT EXISTS species(
	scientific_name varchar(50) NOT NULL,
	population int NOT NULL,
	habitat varchar(20) NOT NULL,
	diet varchar(10) NOT NULL,
	last_time_fed datetime NOT NULL,
	behavior varchar(10),

	PRIMARY KEY(scientific_name)
);

INSERT INTO species
VALUES ('Ailurus fulgens', 
	5,
	'Mountain forest',
	'Omnivore',
	'2016-03-15 05:13:00',
	'Solitary');

CREATE TABLE IF NOT EXISTS customers(
	membership_ID int(6) NOT NULL,
	customer_firstName varchar(20) NOT NULL,
	customer_middleInitial varchar(1) NOT NULL,
	customer_LastName varchar(20) NOT NULL,
	customer_DOB date NOT NULL,
	customer_email varchar(40) NOT NULL,
	membership_type varchar(20) NOT NULL,

	PRIMARY KEY(membership_ID)
);

INSERT INTO customers
VALUES(
	012345,
	'Homer',
	'J',
	'Simpson',
	'1960-05-14',
	'thesimpsons@springfield.com',
	'employee'
);

CREATE TABLE IF NOT EXISTS transactions(
	transaction_ID int NOT NULL,
	member_ID int(6) NOT NULL,
	items varchar(50),
	total int NOT NULL,

	PRIMARY KEY(transaction_ID),
	FOREIGN KEY(member_ID) REFERENCES customers(membership_ID)
);
/*
INSERT INTO transactions
VALUES(
	123,
	123564364,
	'pointless things',
	50
);
*/
CREATE TABLE IF NOT EXISTS animals(
	tag_number int(7) NOT NULL,
	gender varchar(1) NOT NULL,
	temperament varchar(50) NOT NULL,
	last_checkup date NOT NULL,
	illnesses varchar(50),
	date_of_birth date NOT NULL, 
	date_of_arrival date NOT NULL,
	date_diseased date,
	date_of_departure date,
	blood_type varchar(3) NOT NULL,
	species varchar(50) NOT NULL,
	habitat_id int NOT NULL,

	PRIMARY KEY (tag_number),
	FOREIGN KEY (species) REFERENCES species(scientific_name),
	FOREIGN KEY (habitat_id) REFERENCES habitats(habitat_id)
);
/*
INSERT INTO animals 
VALUES(
	7777777,
	'm',
	'angry',
	'2001-06-11',
	'ebola',
	'1980-01-02',
	'2010-03-05',
	'2011-02-07',
	'2015-11-30',
	'O-',
	'Homo Sapien'
);
*/
CREATE TABLE IF NOT EXISTS users(
	username varchar(20) NOT NULL,
	password varchar(20) NOT NULL,
	date_created date NOT NULL,
	active varchar(1) NOT NULL,
	user_id varchar(6) NOT NULL,
	role varchar(20) NOT NULL,

	PRIMARY KEY (username)
);

INSERT INTO users
VALUES(
	'khoffee',
	'abc123',
	'2016-03-14',
	'Y',
	'ABD590',
	'customer'
);

