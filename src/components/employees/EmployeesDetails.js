import React, { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeesProvider"
import "./employees.css"
import { useParams } from "react-router-dom"

export const EmployeeDetail = () => {
    const { employees } = useContext(EmployeeContext)
    const [ employee, setEmployee ] = useState({ location: {}, customer: {} })

    const { employeeId } = useParams();


    useEffect(() => {
        const thisEmployee = employees.find(a => a.id === parseInt(employeeId)) || { location: {}, customer: {} }

        setEmployee(thisEmployee)
    }, [employeeId])

    return (
    <section className="employee">
        <h3 className="employee__name">{ employee.name }</h3>
        <div className="employee__location">Location: { employee.location.name }</div>
        <div className="employee__email">Address: { employee.location.address }</div>
    </section>
    )
}