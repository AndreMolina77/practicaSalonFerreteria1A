import React from "react"
import BrandsCard from "./BrandsCard"

const BrandsList = ({ brands, loading, deleteBrands, updateBrands }) => {
  return (
    <div className="">
      <h1 className="text-2xl font-bold underline text-center">
        Listado de Marcas
      </h1>
      <div className="flex flex-wrap gap-4 justify-center mt-5">
        {loading && <div className="text-center text-gray-500">Cargando...</div>}

        {brands?.map((brand) => (
          <BrandsCard key={brand._id} brand={brand} deleteBrands={deleteBrands} updateBrands={updateBrands}/>
        ))}
      </div>
    </div>
  )
}
export default BrandsList