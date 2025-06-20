import React from "react";
import ProductsList from "../components/Products/ProductsList";
import FormProducts from "../components/Products/FormProducts"
import useDataProducts from "../components/Products/hooks/useDataProducts"

/*
    Campos:
        nombre
        description
        price
        stock
*/

const Products = () => {
    const {
        activeTab, setActiveTab,
        id,
        name, setName,
        description, setDescription,
        price, setPrice,
        stock, setStock,
        products, 
        loading,
        saveProducts,
        deleteProducts,
        updateProducts,
        handleEdit

    } = useDataProducts()

    return(
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Productos</h1>
            
            <div className="flex border-b border-gray-200 mb-4">
                <button className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:border-b-2 focus:border-blue-500" onClick={() => setActiveTab("list")}>
                 Lista de productos
                </button>
                <button className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:border-b-2 focus:border-blue-500" onClick={() => setActiveTab("form")}>
                 Gestionar productos
                </button>
            </div>
            <div>
                {activeTab === "list" && (
                    <div>
                    <ProductsList
                    products={products} 
                    loading={loading} 
                    deleteProducts={deleteProducts} 
                    updateProducts={updateProducts}/>
                  </div>
                )}
                {activeTab === "form" && (
                    <div>
                        <FormProducts
                        setProductName={setName}
                        setProductDescription={setDescription}
                        setProductPrice={setPrice}
                        setProductStock={setStock}
                        id={id}
                        handleEdit={handleEdit}
                        saveProducts={saveProducts}
                        productName={name}
                        productDescription={description}
                        productPrice={price}
                        productStock={stock}
                        />
                    </div>
                )}
            </div>
            </div>
        </div>
    )
}

export default Products