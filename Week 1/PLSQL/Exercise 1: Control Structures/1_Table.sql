CREATE TABLE Customers (
    customer_id NUMBER PRIMARY KEY,
    age NUMBER,
    balance NUMBER,
    IsVIP VARCHAR2(10) DEFAULT 'FALSE'
);

CREATE TABLE Loans (
    loan_id NUMBER PRIMARY KEY,
    customer_id NUMBER REFERENCES Customers(customer_id),
    interest_rate NUMBER,
    due_date DATE
);

INSERT INTO Customers VALUES (1, 65, 5000, 'FALSE');  
INSERT INTO Customers VALUES (2, 45, 15000, 'FALSE'); 
INSERT INTO Customers VALUES (3, 70, 12000, 'FALSE'); 

INSERT INTO Loans VALUES (101, 1, 5.5, SYSDATE + 15); 
INSERT INTO Loans VALUES (102, 2, 4.0, SYSDATE + 45); 
INSERT INTO Loans VALUES (103, 3, 6.0, SYSDATE + 10);


SELECT * FROM Customers;
SELECT * FROM Loans;