import React from "react"
import Button from "../Button" // Asumiendo que tu componente Button sigue en el mismo lugar

const BrandsCard = ({ brand, deleteBrands, updateBrands }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="px-6 py-4">
        {/* Sección de la imagen */}
        {brand.image && (
          <div className="mb-4">
            <img 
              src={brand.image} // Usamos 'brand.image' para la URL de la imagen
              alt={`Logo de ${brand.name}`} // Texto alternativo descriptivo
              className="w-full h-40 object-contain rounded" // Estilos para la imagen
            />
          </div>
        )}

        {/* Nombre de la Marca */}
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          Marca:{" "}
          <span className="text-xl font-medium text-gray-700">
            {brand.name}{" "} {/* Usamos 'brand.name' */}
          </span>
        </h2>

        {/* Año de la Marca */}
        <p className="text-gray-500 font-bold mb-1">{brand.year}</p>

        {/* Slogan de la Marca */}
        <p className="text-gray-500 font-bold mb-1">{brand.slogan}</p>


        {/* Botones de acción */}
            <Button
              label={"Eliminar"}
              actionButton={() => deleteBrands(brand._id)} // Asumiendo que 'brand' tiene un '_id' para identificarla
              colorClass={"danger"}
            />
            <Button
              label={"Editar Información"}
              actionButton={() => updateBrands(brand)} // Pasamos el objeto 'brand' completo para editar
              colorClass={"warning"}
            />
      </div>
    </div>
  )
}

export default BrandsCard