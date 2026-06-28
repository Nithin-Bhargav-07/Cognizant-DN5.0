DECLARE
    CURSOR older_customers IS 
        SELECT customer_id FROM Customers WHERE age > 60;
BEGIN
    FOR cust IN older_customers LOOP
        UPDATE Loans 
        SET interest_rate = interest_rate - 1 
        WHERE customer_id = cust.customer_id;
    END LOOP;
END;
/
SELECT * FROM Loans;