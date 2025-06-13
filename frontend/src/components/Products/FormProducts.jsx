import React from "react";
const RegisterProducts = ({
    productName,
    setProductName,
    productDescription,
    setProductDescription,
    productPrice, 
    setProductPrice,
    productStock, 
    setProductStock,
    id,
    handleEdit,
    saveProducts

}) => {
    return(
        <div className="">
            <form className="w-full max-w-lg mx-auto mt-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div>
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Nombre:</label>
                    <input type="text" name="name" value={productName} onChange={(e) => setProductName(e.target.value)} className="w-full px-3 border rounded" placeholder="Nombre del producto"/>
                </div>

                <div>
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="description">Descripción:</label>
                    <input type="text" name="description" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} className="w-full px-3 border rounded" placeholder="Descripción del producto"/>
                </div>

                <div>
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="price">Precio:</label>
                    <input type="number" name="price" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} className="w-full px-3 border rounded" placeholder="Precio del producto"/>
                </div>

                <div>
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="stock">Stock:</label>
                    <input type="number" name="stock" value={productStock} onChange={(e) => setProductStock(e.target.value)} className="w-full px-3 border rounded" placeholder="Stock del producto"/>
                </div>

                {!id ? (
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={(e) => saveProducts(e)}>
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