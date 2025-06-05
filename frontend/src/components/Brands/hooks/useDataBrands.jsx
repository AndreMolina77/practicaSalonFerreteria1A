/* 
name: {
            type: String
        },
        year: {
            type: String
        },
        slogan: {
            type: String
        },
        image: {
            type: String
        }
*/

import { useEffect, useState } from "react";
import {toast} from "react-hot-toast"

const useDataBrands = () => {
    const API = "http://localhost:4000/api/brands"
    const [activeTab, setActiveTab] = useState("list")
    const [id, setId] = useState ("")
    const [name, setName] = useState ("")
    const [year, setYear] = useState ("")
    const [slogan, setSlogan] = useState ("")
    const [image, setImage] = useState ("")
    const [brands, setBrands] = useState ([])
    const [loading, setLoading] = useState(true)

    const fetchBrands = async () => {
        const response = await fetch(API);
        if(!response.ok) {
            throw new Error("Hubo un error al obtener las marcas")
        }
        const data = await response.json()
        setBrands(data)
        setLoading(false)
    }
    useEffect(() => {
        fetchBrands()
    }, [])
    const saveBrands = async (e) => {
        e.preventDefault();
        const newBrand = {
            name: name,
            year: year,
            slogan: slogan,
            image, image
        }
        const response = await fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBrand)
        })
        if(!response.ok){
            throw new Error("Hubo un error al registrar la marca")
        }
        const data = await response.json()
        toast.success("Proveedor registrado")
        setBrands(data)
        fetchBrands()
        setName("")
        setYear("")
        setSlogan("")
        setImage("")
    }
    const deleteBrands= async (id) => {
        const response = await fetch(`${API}/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        })
        if (!response.ok) {
          throw new Error("Hubo un error al eliminar la marca")
        }
        toast.success("Marca eliminada eliminado")
        fetchBrands()
      }
      const updateBrands = async (dataBrands) => {
        setId(dataBrands._id)
        setName(dataBrands.name)
        setSlogan(dataBrands.slogan)
        setImage(dataBrands.image)
        setActiveTab("form")
      }
      const handleEdit = async (e) => {
        e.preventDefault()
        try {
          const editBrand = {
            name: name,
            year: year,
            slogan: slogan,
            image: image
          }
          const response = await fetch(`${API}/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(editBrand)
          })
          if (!response.ok) {
            throw new Error("Error al actualizar la marca")
          }
          toast.success("Marca actualizado")
          setId("")
          setName("")
          setYear("")
          setSlogan("")
          setImage("")
          setActiveTab("list")
          fetchBrands()
        } catch (error) {
          console.error("Error al editar lar marca: ", error)
        }
}   
return{
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

}
}
export default useDataBrands;