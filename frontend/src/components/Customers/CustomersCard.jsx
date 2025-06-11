import React from "react"
import Button from "../Button"

const CostumersCard = (customer, deleteCustomers, updateCustomers) => {
    return(
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
            <div className="px-6 py-4">
                
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                    Nombre de Usuario:{" "}
                    <span className="text-xl font-medium text-gray-700">
                        {customer.name}{" "} 
                    </span>
                </h2>
                

            </div>
        </div>
        
        
    )
}

/*
<h2 className="text-xl font-bold text-gray-800 mb-2">
          Nombre:{" "}
          <span className="text-xl font-medium text-gray-700">
            {customer.name}{" "} {/* Usamos 'brand.name' }*/
          /*</span>
        </h2> 
        */