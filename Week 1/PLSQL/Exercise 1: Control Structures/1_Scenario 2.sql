DECLARE
    CURSOR wealthy_customers IS 
        SELECT customer_id FROM Customers WHERE balance > 10000;
BEGIN
    FOR cust IN wealthy_customers LOOP
        UPDATE Customers 
        SET IsVIP = 'TRUE' 
        WHERE customer_id = cust.customer_id;
    END LOOP;
END;
/
SELECT * FROM Customers;