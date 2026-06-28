DECLARE
    CURSOR due_loans IS 
        SELECT customer_id, loan_id, due_date 
        FROM Loans 
        WHERE due_date BETWEEN SYSDATE AND SYSDATE + 30;
BEGIN
    FOR loan IN due_loans LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder for Customer ' || loan.customer_id || ': Loan (' || loan.loan_id || ') is due soon!');
    END LOOP;
END;
/