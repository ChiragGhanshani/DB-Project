DROP DATABASE IF EXISTS zootest;
CREATE DATABASE zootest;
USE zootest;


CREATE TABLE IF NOT EXISTS employees(
	employee_id int(6) NOT NULL,
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
	role int(2),

	PRIMARY KEY (employee_ID) #had forgotten completely to add this constraint
);


CREATE TABLE IF NOT EXISTS customers(
	membership_ID int(6) NOT NULL,
	customer_firstName varchar(20) NOT NULL,
	customer_middleInitial varchar(1) NOT NULL,
	customer_LastName varchar(20) NOT NULL,
	customer_DOB date NOT NULL,
	customer_email varchar(40) NOT NULL,
	membership_type int(2) NOT NULL,

	PRIMARY KEY(membership_ID)
);


CREATE TABLE IF NOT EXISTS transactions(
	transaction_ID int NOT NULL,
	member_ID int(6) NOT NULL,
	transaction_type int(2) NOT NULL,
	transaction_time datetime NOT NULL,
	items int(2), /*mutli valued?*/
	total int NOT NULL,

	PRIMARY KEY(transaction_ID),
	FOREIGN KEY(member_ID) REFERENCES customers(membership_ID)
);


CREATE TABLE IF NOT EXISTS users(
	username varchar(20) NOT NULL,
	password varchar(20) NOT NULL,
	date_created date NOT NULL,
	active varchar(1) NOT NULL,
	user_id varchar(6) NOT NULL,
	role int(2) NOT NULL,

	PRIMARY KEY (username)
);


CREATE TABLE IF NOT EXISTS species(
	scientific_name varchar(50) NOT NULL, /*revisit this*/
	population int NOT NULL,
	/*habitat varchar(20) NOT NULL,  #gotta rename this, decide what it means first*/
	diet int(2) NOT NULL,
	behavior int(2),

	PRIMARY KEY(scientific_name)
);


CREATE TABLE IF NOT EXISTS habitats(
	habitat_id int NOT NULL,
	employee_id int(6) NOT NULL,
	species varchar(20) NOT NULL,
	last_time_fed datetime NOT NULL,
	area int(2),

	PRIMARY KEY (habitat_id),
	FOREIGN KEY (employee_id) REFERENCES employee(employee_id)
);


CREATE TABLE IF NOT EXISTS animals(
	tag_number int(7) NOT NULL,
	gender varchar(1) NOT NULL,
	temperament int(2) NOT NULL,
	last_checkup date NOT NULL,
	illnesses int(2),			/*multi value?*/
	date_of_birth date NOT NULL,
	date_of_arrival date NOT NULL,
	date_deceased date,
	date_of_departure date,
	blood_type varchar(3) NOT NULL,
	species varchar(50) NOT NULL,	/*work on this as key*/
	habitat_id int NOT NULL,

	PRIMARY KEY (tag_number),
	FOREIGN KEY (species) REFERENCES species(scientific_name),
	FOREIGN KEY (habitat_id) REFERENCES habitats(habitat_id)
);