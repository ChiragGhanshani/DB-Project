DROP DATABASE IF EXISTS zootest;
CREATE DATABASE zootest;
USE zootest;


CREATE TABLE IF NOT EXISTS employee_roles(
	id int(2) NOT NULL,
	role_name varchar(20) NOT NULL,

	PRIMARY KEY (id)
);


CREATE TABLE IF NOT EXISTS states(
	id int(2) NOT NULL,
	state_name varchar(40) NOT NULL,

	PRIMARY KEY (id)
);


CREATE TABLE IF NOT EXISTS employees(
	employee_id varchar(36) NOT NULL, /*uuid*/
	employee_firstname varchar(15) NOT NULL,
	employee_lastname varchar(15) NOT NULL,
	street_address varchar(25) NOT NULL,
	city varchar(22) NOT NULL,
	state int(2) NOT NULL,/*enumerated above*/
	zipcode int(5) NOT NULL, /*limited zip to 5 digits - this is all we need to care about*/
	phone_number varchar(12) NOT NULL,
	employee_dob date NOT NULL,
	email varchar(40) NOT NULL,
	national_id int(9) NOT NULL,
	manager_id varchar(36), /*uuid*/
	salary int NOT NULL,
	role int(2) NOT NULL,/*enumerated above*/
	active varchar(1) NOT NULL,

	PRIMARY KEY (employee_id),
	FOREIGN KEY (role) REFERENCES employee_roles(id),
	FOREIGN KEY (state) REFERENCES states(id)
);


CREATE TABLE IF NOT EXISTS customers(
	membership_id varchar(36) NOT NULL, /*uuid*/
	customer_firstName varchar(20) NOT NULL,
	customer_LastName varchar(20) NOT NULL,
	customer_streetAddress varchar(25) NOT NULL,
	customer_city varchar(22) NOT NULL,
	customer_state int(2) NOT NULL,
	customer_zipCode int(5) NOT NULL,
	customer_phoneNumber varchar(12) NOT NULL,
	customer_DOB date NOT NULL,
	customer_email varchar(40) NOT NULL,
	active varchar(1) NOT NULL,

	PRIMARY KEY(membership_id)
);

CREATE TABLE IF NOT EXISTS transactions(
	transaction_id varchar(36) NOT NULL, /*uuid*/
	member_id varchar(36) NOT NULL, /*uuid*/
	transaction_time datetime NOT NULL,
	/*items int(2), multivalued -- see items table*/

	PRIMARY KEY(transaction_id),
	FOREIGN KEY(member_id) REFERENCES customers(membership_id)
);

CREATE TABLE IF NOT EXISTS item_types(
	id int(2) NOT NULL,
	item_type varchar(20) NOT NULL,
  item_cost int NOT NULL,

	PRIMARY KEY (id)
);


CREATE TABLE IF NOT EXISTS transaction_items(
	trans_id varchar(36) NOT NULL, /*uuid*/
	item_id int(2) NOT NULL, /*uuid*/
	quantity int NOT NULL,

	PRIMARY KEY(trans_id, item_id),
	FOREIGN KEY(trans_id) REFERENCES transactions(transaction_id),
  FOREIGN KEY(item_id) REFERENCES item_types(id)
);


CREATE TABLE IF NOT EXISTS users(
	username varchar(20) NOT NULL,
	password varchar(20) NOT NULL,
	date_created date NOT NULL,
	user_id varchar(36) NOT NULL, /*uuid*/
	role enum('Customer','Employee'),
	active varchar(1) NOT NULL,
	
	PRIMARY KEY (username)
);


CREATE TABLE IF NOT EXISTS behaviors(
	id int(2) NOT NULL,
	behavior varchar(40) NOT NULL,

	PRIMARY KEY (id)
);


CREATE TABLE IF NOT EXISTS species(
	scientific_name varchar(50) NOT NULL, /*maybe replace with surrogate key?*/
	population int NOT NULL,
	natural_habitat varchar(20) NOT NULL,
	diet enum('Herbivore', 'Carnivore', 'Omnivore'),
	behavior int(2), /*enumerated above*/

	PRIMARY KEY (scientific_name),
	FOREIGN KEY (behavior) REFERENCES behaviors(id)
);


CREATE TABLE IF NOT EXISTS areas(
	id int(2) NOT NULL,
	area varchar(20) NOT NULL,

	PRIMARY KEY (id)
);


CREATE TABLE IF NOT EXISTS habitats(
	habitat_id int NOT NULL,
	employee_id varchar(36) NOT NULL,
	last_time_fed datetime,
	area int(2), /*enumerated above*/

	PRIMARY KEY (habitat_id),
	FOREIGN KEY (employee_id) REFERENCES employees(employee_id),
	FOREIGN KEY (area) REFERENCES areas(id)
);

CREATE TABLE IF NOT EXISTS animals(
	tag_number varchar(36) NOT NULL, /*uuid*/
	gender enum('Male', 'Female'),
	last_checkup date NOT NULL,
	/*illnesses varchar(100),*/
	date_of_birth date NOT NULL,
	date_of_arrival date,
	date_deceased date,
	date_of_departure date,
	blood_type varchar(3),
	species varchar(50) NOT NULL,
	habitat_id int NOT NULL,

	PRIMARY KEY (tag_number),
	FOREIGN KEY (species) REFERENCES species(scientific_name),
	FOREIGN KEY (habitat_id) REFERENCES habitats(habitat_id)
);

CREATE TABLE IF NOT EXISTS animal_illnesses(
	tag_number varchar(36) NOT NULL,
	illness varchar(25) NOT NULL,
	description varchar(300),

	PRIMARY KEY (tag_number, illness),
	FOREIGN KEY (tag_number) REFERENCES animals(tag_number)
);

CREATE TABLE IF NOT EXISTS zoo_events(
	event_id int NOT NULL,
	event_date date NOT NULL,
	name varchar(30) NOT NULL,
	start_time time NOT NULL,
	end_time time NOT NULL,
	area int(2), /*enumerated above*/
	description varchar(100),

	PRIMARY KEY (event_id),
	FOREIGN KEY (area) REFERENCES areas(id)
);
