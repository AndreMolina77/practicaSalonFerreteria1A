import { useEffect, useState } from "react";
import { toast } from "react-hot-toast"
const useDataProducts = ( ) => {
    const [activeTab, setActiveTab] = useState("")
    const API = "http://localhost:5000/api/products"
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [stock, setStock] = useState("")
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchProducts = async () => {
        const response = await fetch(API);
        if (!response.ok){
            throw new Error("Hubo un error al obtener los productos")
        }
        const data = await response.json()
        setProducts(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    const saveProducts = async (e) => {
        e.preventDefault();
        const newProduct = {
            name: name,
            description: description,
            price: price,
            stock: stock
        }
        const response = await fetch(API, {
         method: "POST",
         headers: {
          "Content-Type": "application/json"
      },
         body: JSON.stringify(newProduct)
        })
        if (!response.ok){
            throw new Error("Hubo un error al registrar el producto")
        }
        const data = await response.json()
        toast.success("Producto registrado")
        setProducts(data)
        fetchProducts()
        setName("")
        setDescription("")
        setPrice("")
        setStock("")
    }
    const deleteProducts = async (id) => {
        const response = await fetch(`${API}/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        })
        if (!response.ok) {
          throw new Error("Hubo un error al eliminar el producto")
        }
        toast.success("Producto eliminado")
        fetchProducts()
    }
    const updateProducts = async (dataProducts) => {
        setId(dataProducts._id)
        setName(dataProducts.name)
        setDescription(dataProducts.description)
        setPrice(dataProducts.price)
        setStock(dataProducts.stock)
        setActiveTab("form")
    }
    const handleEdit = async (e) => {
        e.preventDefault()
        try{
            const editProduct = {
                name: name,
                description: description,
                price: price,
                stock: stock
            }
            const response = await fetch(`${API}/${id}`, {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(editProduct)
              })
              if (!response.ok)
              {
                throw new Error("Error al actualizar el producto")
              }
              toast.success("Producto actualizado")
              setId("")
              setName("")
              setDescription("")
              setPrice("")
              setStock("")
              setActiveTab("list")
              fetchProducts()
        } catch (error) {
            console.error("Error al editar el producto", error)
        }
    }
    return{
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
    }
}

export default useDataProducts;