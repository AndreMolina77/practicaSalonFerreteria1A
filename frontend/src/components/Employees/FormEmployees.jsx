import React from 'react';

const RegisterEmployees = ({
    employeeName, 
    setEmployeeName, 
    employeeLastName, 
    setEmployeeLastName, 
    employeeBirthday, 
    setEmployeeBirthday, 
    employeePassword, 
    setEmployeePassword, 
    employeeHireDate,
    setEmployeeHireDate,
    employeeTelephone, 
    setEmployeeTelephone, 
    employeeDUI, 
    setEmployeeDUI, 
    employeeEmail,
    setEmployeeEmail,
    employeeAddress,
    setEmployeeAddress,
    employeeIsVerified, 
    setEmployeeIsVerified, 
    id, 
    handleEdit, 
    saveEmployee
}) => {
  return (
    <div className="">
      <form
        className="w-full max-w-lg mx-auto mt-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Nombre:</label>
                            <input type="text" name="name" value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="Nombre de usuario" />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="lastName">Apellido:</label>
                            <input type="text" name="lastName" value={employeeLastName} onChange={(e) => setEmployeeLastName(e.target.value)} className="w-full px-3 border rounded" placeholder="Apellido de usuario" />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Correo electrónico:</label>
                            <input type="text" name="email" value={employeeEmail} onChange={(e) => setEmployeeEmail(e.target.value)} className="w-full px-3 border rounded" placeholder="Ej: correoelectronico@gmail.com" />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="address">Dirección:</label>
                            <input type="text" name="address" value={employeeAddress} onChange={(e) => setEmployeeAddress(e.target.value)} className="w-full px-3 border rounded" placeholder="Dirección del empleado" />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="birthday">Cumpleaños</label>
                            <input type="date" name="birthday" value={employeeBirthday} onChange={(e) => setEmployeeBirthday(e.target.value)} className="w-full px-3 border rounded" placeholder="Cumpleaños de usuario" />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">Contraseña:</label>
                            <input type="password" name="password" value={employeePassword} onChange={(e) => setEmployeePassword(e.target.value)} className="w-full px-3 border rounded" />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="hireDate">Fecha de contrato:</label>
                            <input type="text" name="hireDate" value={employeeHireDate} onChange={(e) => setEmployeeHireDate(e.target.value)} className="w-full px-3 border rounded" placeholder="Ej: correoelectronico@gmail.com" />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="telephone">Teléfono</label>
                            <input type="tel" name="telephone" pattern="^[267][0-9]{3}-?[0-9]{4}$" value={employeeTelephone} onChange={(e) => setEmployeeTelephone(e.target.value)} className="w-full px-3 border rounded" placeholder="Ej: 7533-2222 o 75332222" />
                        </div>

                        <div>
                            <label className="vblock text-gray-700 font-bold mb-2" htmlFor="DUI">DUI:</label>
                            <input type="text" pattern="^[0-9]{8}-[0-9]$" maxLength="10" value={employeeDUI} onChange={(e) => setEmployeeDUI(e.target.value)} className="w-full px-3 border rounded" />
                        </div>

                        <div>
                            <label className="vblock text-gray-700 font-bold mb-2" htmlFor="isVerified">Está verificado</label>
                            <select name="isAVerified" value={employeeIsVerified}  onChange={(e) => setEmployeeIsVerified(e.target.value === 'true')} className="w-full px--3 py2 border rounded">
                            <option value="true">Si</option>
                            <option value="false">No</option>
                            </select>
                        </div>
        

        {!id ? (
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={(e) => saveEmployee(e)}>
            Guardar
          </button>
        ) : (
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={(e) => handleEdit(e)}>
            Editar
          </button>
        )}
      </form>
    </div>
  );
};

export default RegisterEmployees;