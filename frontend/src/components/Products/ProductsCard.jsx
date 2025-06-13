import React from "react";
import Button from "../Button";

/*
    Campos:
        name
        description
        price
        stock
*/

const ProductsCard = (product, deleteProducts, updateProducts) => {
    return(
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
            <div className="px-6 py-4">
                <h2 className="text-xl font-bold text-gay-800 mb-2">
                    Nombre de Producto:{""}
                    <span className="text-xl font-medium text-gray-700">
                        {product.name}{""}
                    </span>
                </h2>

                <p className="text-gray-500 font-bold mb-1">{product.name}</p>

                <p className="text-gray-500 font-bold mb-1">{product.description}</p>

                <p className="text-gray-500 font-bold mb-1">{product.price}</p>

                <p className="text-gray-500 font-bold mb-1">{product.stock}</p>

                <Button 
                label={"Eliminar"}
                actionButton={() => deleteProducts(product._id)}
                colorClass={"danger"}
                />
                <Button 
                label={"Editar información"}
                actionButton={() => updateProducts(productº)}
                colorClass={"danger"}
                />

            </div>
        </div>
    )
}

export default ProductsCard