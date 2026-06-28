CREATE OR REPLACE PROCEDURE AddNewCustomer(
    p_cust_id NUMBER, 
    p_name VARCHAR2
) IS
BEGIN
    INSERT INTO Customers (customer_id, name) 
    VALUES (p_cust_id, p_name);
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Customer added successfully!');

EXCEPTION
    WHEN DUP_VAL_ON_INDEX THEN
        DBMS_OUTPUT.PUT_LINE('Error: Customer ID ' || p_cust_id || ' already exists!');
        ROLLBACK;
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('An unexpected error occurred.');
        ROLLBACK;
END;
/