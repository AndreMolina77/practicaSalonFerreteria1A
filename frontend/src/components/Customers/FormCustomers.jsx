/*
name
lastName
birthday
email
password
telephone
dui
isVerified
*/

import React from "react";
const RegisterCustomers= ({
    customerName, 
    setCustomerName, 
    customerLastName, 
    setCustomerLastName, 
    customerBirthday, 
    setCustomerBirthday, 
    customerPassword, 
    setCustomerPassword, 
    customerTelephone, 
    setcustomerTelephone, 
    customerDUI, 
    setCustomerDUI, 
    customerIsVerified, 
    setCustomerIsVerified, 
    id, 
    handleEdit, 
    saveCustomers }) => {
        return(
            <div className="">
                      <form className="w-full max-w-lg mx-auto mt-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Nombre:</label>
                            <input type="text" name="name" value={customerName} onChange={(e) => setCustomerName(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="Nombre de usuario" />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="lastName">Apellido:</label>
                            <input type="text" name="lastName" value={customerLastName} onChange={(e) => setCustomerLastName(e.target.value)} className="w-full px-3 border rounded" placeholder="Apellido de usuario" />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="birthday">Cumpleaños</label>
                            <input type="date" name="birthday" value={customerBirthday} onChange={(e) => setCustomerBirthday(e.target.value)} className="w-full px-3 border rounded" placeholder="Cumpleaños de usuario" />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">Contraseña:</label>
                            <input type="password" name="password" value={customerPassword} onChange={(e) => setCustomerPassword(e.target.value)} className="w-full px-3 border rounded" />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="telephone"></label>
                            <input type="tel" name="telephone" pattern="^[267][0-9]{3}-?[0-9]{4}$" value={customerTelephone} onChange={(e) => setcustomerTelephone(e.target.value)} className="w-full px-3 border rounded" placeholder="Ej: 7533-2222 o 75332222" />
                        </div>

                        <div>
                            <label className="vblock text-gray-700 font-bold mb-2" htmlFor="DUI"></label>
                            <input type="text" pattern="^[0-9]{8}-[0-9]$" maxlength="10" value={customerDUI} onChange={(e) => setCustomerDUI(e.target.value)} className="w-full px-3 border rounded" />
                        </div>

                        <div>
                            <label className="vblock text-gray-700 font-bold mb-2" htmlFor="isVerified">Está verificado</label>
                            <select name="isAVerified" value={customerIsVerified}  onChange={(e) => setCustomerIsVerified(e.target.value === 'true')} className="w-full px--3 py2 border rounded">
                            <option value="true">Si</option>
                            <option value="false">No</option>
                            </select>
                        </div>

                        {!id ? (
                            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={(e) => saveCustomers(e)}>
                                Guardar
                            </button>
                        ) : (
                            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={(e) => handleEdit(e)}>
                                Editar
                            </button>
                        )}

                      </form>
            </div>
        )
    
}

export default RegisterCustomers;