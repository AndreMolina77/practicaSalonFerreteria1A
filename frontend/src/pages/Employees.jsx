import React from "react";
import EmployeesList from "../components/Employees/EmployeesList"
import FormEmployees from "../components/Employees/FormEmployees"
import useDataEmployees from "../components/Employees/hooks/useDataEmployees"

const Employees = () => {
    const {
        activeTab, setActiveTab,
        id, 
        name, setName,
        lastName, setlastName,
        birthday, setBirthday,
        email, setEmail,
        address, setAddress,
        password, setPassword,
        hireDate, setHireDate,
        telephone, setTelephone,
        dui, setDui,
        isVerified, setIsVerified,
        employee,
        loading,
        saveEmployee,
        deleteEmployee,
        updateEmployee,
        handleEdit
    } = useDataEmployees()


    return(
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Empleado</h1>
            
            <div className="flex border-b border-gray-200 mb-4">
                <button className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:border-b-2 focus:border-blue-500" onClick={() => setActiveTab("list")}>
              Lista de empleado
              </button>
            <button className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:border-b-2 focus:border-blue-500" onClick={() => setActiveTab("form")}>
              Gestionar empleado
            </button>
          </div>
          <div>
            {activeTab === "list" && (
              <div>
                <EmployeesList 
                employee={employee} 
                loading={loading} 
                deleteEmployee={deleteEmployee} 
                updateEmployee={updateEmployee}/>
              </div>
            )}
            {activeTab === "form" && (
              <div>
                <FormEmployees
                setEmployeeName={setName} 
                setEmployeeLastName={setlastName} 
                setEmployeeBirthday={setBirthday} 
                setEmployeeEmail={setEmail} 
                setEmployeeAddress={setAddress}
                setEmployeePassword={setPassword} 
                setEmployeeHireDate={setHireDate}
                setEmployeeTelephone={setTelephone} 
                setEmployeeDUI={setDui} 
                setEmployeeIsVerified={setIsVerified} 
                id={id} 
                handleEdit={handleEdit} 
                saveEmployee={saveEmployee}
                employeeName={name}
                employeeLastName={lastName}
                employeeBirthday={birthday}
                employeeEmail={email}
                employeeAdress={address}
                employeePassword={password}
                employeeHireDate={hireDate}
                employeeTelephone={telephone}
                employeedui={dui}
                employeeIsVerified={isVerified}
                />
              </div>
            )}
            </div>
          </div>
        </div>
    )
}

export default Employees