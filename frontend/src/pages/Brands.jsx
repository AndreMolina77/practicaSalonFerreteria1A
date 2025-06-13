import React from "react";
import BrandsList from "../components/Brands/BrandsList"
import RegisterBrands from "../components/Brands/FormBrands"
import useDataBrands from "../components/Brands/hooks/useDataBrands"

const Brands = () => {
    const {
        activeTab, setActiveTab,
        id,
        name, setName,
        year, setYear,
        slogan, setSlogan,
        image, setImage,
        brands,
        loading,
        saveBrands,
        deleteBrands,
        updateBrands,
        handleEdit
    } = useDataBrands()
    return(
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Marcas</h1>
                <div className="flex borde-b border-gray-200 mb-400">
                    <button className="px-4 py-2 text-ggray-600 hover:text-gray-800 focust:outline-none focus:border-b-2 focus-blue-500" onClick={() => setActiveTab("list")}>
                        Lista de Marcas
                    </button>
                    <button className="px-4 py-2 text-ggray-600 hover:text-gray-800 focust:outline-none focus:border-b-2 focus-blue-500" onClick={() => setActiveTab("form")}>
                        Gestionar Marcas
                    </button>
                </div>
                <div>
                    {activeTab === "list" && (
                        <div>
                        <BrandsList brands={brands} loading={loading} deleteBrands={deleteBrands} updateBrands={updateBrands}/>
                      </div>
                    )}
                    {activeTab === "form" && (
                        <div>
                            <RegisterBrands setNameBrand={setName} setYearBrand={setYear} setSloganBrand={setSlogan} setImageBrand={setImage} nameBrand={name} yearBrand={year} sloganBrand={slogan} imageBrand={image} id={id} handleEdit={handleEdit} saveBrands={saveBrands}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default Brands