import React, { useState, useEffect } from "react"
import Employee from "./Employee"
import EmployeeRepository from "../../repositories/EmployeeRepository"
import "./EmployeeList.css"


export default () => {
    const [employees, setEmployees] = useState([])

    useEffect(
        () => {
            EmployeeRepository.getAll()
            .then((employeeData) => {
                setEmployees(employeeData)
            })
        }, []
    )

    return (
        <>
            <div className="employees">
                {
                    employees.map(employee => <Employee key={employee.id} employee={employee} />)
                }
            </div>
        </>
    )
}
