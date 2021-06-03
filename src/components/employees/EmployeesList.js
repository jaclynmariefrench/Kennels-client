import { Link, useHistory } from 'react-router-dom';
import React, { useContext, useEffect } from "react";
import "./employees.css";
import { EmployeeContext } from "./EmployeesProvider";

export const EmployeeList = ({ }) => {
  const { employees, getEmployees } = useContext(EmployeeContext);
  const history = useHistory()

  useEffect(() => {
    getEmployees();
  }, []);


  return (
    <>
      <h2>Employees</h2>
      
      <button onClick={() => history.push("/employees/create")}>
        Hire Employee
      </button>
      
      <div className="employees">
      {employees.map((employee) => (
        <Link key={employee.id} to={`/employees/detail/${employee.id}`}>{employee.name}</Link>
      ))}
      </div>
    </>
  );
};