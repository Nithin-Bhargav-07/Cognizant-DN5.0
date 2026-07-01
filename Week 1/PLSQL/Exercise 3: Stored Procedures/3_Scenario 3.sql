CREATE OR REPLACE PROCEDURE TransferFunds(
    p_from_acc NUMBER, 
    p_to_acc NUMBER, 
    p_amount NUMBER
) IS
    v_balance NUMBER;
BEGIN
    SELECT balance INTO v_balance FROM Accounts WHERE account_id = p_from_acc;
    
    IF v_balance >= p_amount THEN
        UPDATE Accounts SET balance = balance - p_amount WHERE account_id = p_from_acc;
        UPDATE Accounts SET balance = balance + p_amount WHERE account_id = p_to_acc;
        COMMIT;
        DBMS_OUTPUT.PUT_LINE('Transfer of Funds' || p_amount || ' successful!');
    ELSE
        DBMS_OUTPUT.PUT_LINE('Error: Insufficient balance.');
    END IF;
END;
/