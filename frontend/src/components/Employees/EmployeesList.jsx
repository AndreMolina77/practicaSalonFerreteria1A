import React from "react"
import EmployeesCard from "./EmployeesCard"

const EmployeesList = ({ employees, loading, deleteEmployee, updateEmployee }) => {
  return(
        <div className="">
            <h1 className="text-2xl font-bold underline text-center">
                Listado de Empleados
            </h1>
            <div className="flex flex-wrap gap-4 justify-center mt-5">
               {loading &&  <div className="text-center text-gray-500">Cargando...</div>}

               {employees?.map((employee)=> (
                <EmployeesCard key={employee._id} employee={employee} deleteEmployee={deleteEmployee} updateEmployee={updateEmployee}/>
               ))}
            </div>
        </div>
    )
}

export default EmployeesList