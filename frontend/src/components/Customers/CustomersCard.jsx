import React from "react"
import Button from "../Button"

const CostumersCard = ({customer, deleteCustomers, updateCustomers}) => {
    return(
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
            <div className="px-6 py-4">
                
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                    Nombre de Usuario:{" "}
                    <span className="text-xl font-medium text-gray-700">
                        {customer.name}{" "} 
                    </span>
                </h2>

                <p className="text-gray-500 font-bold mb-1">Apellido: {customer.lastName}</p>

                <p className="text-gray-500 font-bold mb-1">Cumpleaños: {customer.birthday}</p>

                <p className="text-gray-500 font-bold mb-1">Correo electrónico: {customer.email}</p>

                <p className="text-gray-500 font-bold mb-1">Contraseña: {customer.password}</p>

                <p className="text-gray-500 font-bold mb-1">Teléfono{customer.telephone}</p>

                <p className="text-gray-500 font-bold mb-1">DUI: {customer.dui}</p>                

                <p className="text-gray-500 font-bold">Verificado: {customer.isVerified ? "✓ Verificado" : "✗ No Verificado"}</p>
                
                <Button
              label={"Eliminar"}
              actionButton={() => deleteCustomers(customer._id)} 
              colorClass={"danger"}
            />
            <Button
              label={"Editar Información"}
              actionButton={() => updateCustomers(customer)} 
              colorClass={"warning"}
            />

            </div>
        </div>
 
        
    )
}

export default CostumersCard;

/*
<h2 className="text-xl font-bold text-gray-800 mb-2">
          Nombre:{" "}
          <span className="text-xl font-medium text-gray-700">
            {customer.name}{" "} {/* Usamos 'brand.name' }*/
          /*</span>
        </h2> 
        */