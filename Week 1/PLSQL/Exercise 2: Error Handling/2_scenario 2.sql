CREATE OR REPLACE PROCEDURE UpdateSalary(
    p_emp_id NUMBER, 
    p_percentage NUMBER
) IS
    e_emp_not_found EXCEPTION;
BEGIN
    UPDATE Employees 
    SET salary = salary + (salary * p_percentage / 100) 
    WHERE employee_id = p_emp_id;
    IF SQL%NOTFOUND THEN
        RAISE e_emp_not_found;
    END IF;

    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Salary updated successfully!');

EXCEPTION
    WHEN e_emp_not_found THEN
        DBMS_OUTPUT.PUT_LINE('Error: Employee ID ' || p_emp_id || ' does not exist.');
        ROLLBACK;
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('An unexpected error occurred.');
        ROLLBACK;
END;
/