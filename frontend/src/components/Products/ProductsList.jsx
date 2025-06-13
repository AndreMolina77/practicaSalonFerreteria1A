import React from "react";
import ProductsCard from "./ProductsCard"

const ProductsList = ({products, loading, deleteProducts, updateProducts}) => {
    return(
        <div className="">
            <h1 className="text-2xl font-bold underline text-center">
                Listado de Productos
            </h1>
            <div className="flex flex-wrap gap-4 justify-center mt-5">
               {loading &&  <div className="text-center text-gray-500">Cargando...</div>}

               {products?.map((product)=> (
                <ProductsCard key={product._id} product={product} deleteProducts={deleteProducts} updateProducts={updateProducts}/>
               ))}
            </div>
        </div>
    )
}

export default ProductsList