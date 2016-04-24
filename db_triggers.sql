USE zootest;

/*set delimiter in case we want multiple statements within this trigger*/
delimiter |

CREATE TRIGGER tr_users_update AFTER UPDATE ON users
	FOR EACH ROW
	BEGIN
		IF NEW.active <> OLD.active THEN
			UPDATE employees SET employees.active = NEW.active WHERE employees.employee_id = NEW.user_id;
			UPDATE customers SET customers.active = NEW.active WHERE customers.membership_id = NEW.user_id;
		END IF;
	END;
|

delimiter ;