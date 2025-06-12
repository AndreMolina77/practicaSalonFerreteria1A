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
    setcustomerDUI, 
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

                      </form>
            </div>
        )
    
}