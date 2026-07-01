CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    p_dept_id NUMBER, 
    p_bonus_pct NUMBER
) IS
BEGIN
    UPDATE Employees 
    SET salary = salary + (salary * p_bonus_pct / 100) 
    WHERE department_id = p_dept_id;
    
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Bonuses applied to Department ' || p_dept_id);
END;
/