CREATE TABLE Accounts (account_id NUMBER PRIMARY KEY, balance NUMBER, account_type VARCHAR2(20));
INSERT INTO Accounts VALUES (1, 1000, 'Savings');
INSERT INTO Accounts VALUES (2, 500, 'Checking');
INSERT INTO Accounts VALUES (3, 2000, 'Savings');

CREATE TABLE Employees (employee_id NUMBER PRIMARY KEY, salary NUMBER, department_id NUMBER);
INSERT INTO Employees VALUES (101, 50000, 10);
INSERT INTO Employees VALUES (102, 60000, 10);
INSERT INTO Employees VALUES (103, 70000, 20);