import React from "react"
import Button from "../Button" // Asumiendo que tu componente Button sigue en el mismo lugar

const EmployeesCard = ({ employee, deleteEmployee, updateEmployee }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="px-6 py-4">
      <h2 className="text-xl font-bold text-gray-800 mb-2">
                    Nombre de Empleado:{" "}
                    <span className="text-xl font-medium text-gray-700">
                        {employee.name}{" "} 
                    </span>
                </h2>

                <p className="text-gray-500 font-bold mb-1">Apellido: {employee.lastName}</p>

                <p className="text-gray-500 font-bold mb-1">Cumpleaños: {employee.birthday}</p>

                <p className="text-gray-500 font-bold mb-1">Correo electrónico: {employee.email}</p>

                <p className="text-gray-500 font-bold mb-1">Dirección: {employee.address}</p>

                <p className="text-gray-500 font-bold mb-1">Contraseña: {employee.password}</p>

                <p className="text-gray-500 font-bold mb-1">Fecha de contrato: {employee.hireDate}</p>

                <p className="text-gray-500 font-bold mb-1">Teléfono: {employee.telephone}</p>

                <p className="text-gray-500 font-bold mb-1">DUI: {employee.dui}</p>                

                <p className="text-gray-500 font-bold">Verificado: {employee.isVerified ? "✓ Verificado" : "✗ No Verificado"}</p>
        
        {/* Botones de acción */}
            <Button
              label={"Eliminar"}
              actionButton={() => deleteEmployee(employee._id)} // Asumiendo que 'employee' tiene un '_id' para identificarla
              colorClass={"danger"}
            />
            <Button
              label={"Editar Información"}
              actionButton={() => updateEmployee(employee)} // Pasamos el objeto 'employee' completo para editar
              colorClass={"warning"}
            />
      </div>
    </div>
  )
}

export default EmployeesCard