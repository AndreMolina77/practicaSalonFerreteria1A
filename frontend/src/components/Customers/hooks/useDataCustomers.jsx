import { use, useEffect, useState } from "react";
import { toast } from "react-hot-toast"

/*
name
lastName
birthday
email
password
telephone
dui
isVerified
*/

const useDataCustomers = () => {
    const [activeTab, setActiveTab] = useState("list");
    const API = "http://localhost:4000/api/customers";
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [lastName, setlastName] = useState("")
    const [birthday, setBirthday] = useState("")
    const [email, setEmail] = ("")
    const [password, setPassword] =("")
    const [telephone, setTelephone] = ("")
    const [DUI, setDUI] = useState("")
    const [isVerified, setIsVerified] = useState(false)
    const [customers, setCustomers] = useState("")
    const [loading, setLoading] = useState(true)

    const fetchCustomers = async () => {
        const response = await fetch(API)
        if(!response.ok){
            throw new Error("Hubo un error al obtener los clientes")
        }
        const data = await response.json()
        setCustomers(data)
        setLoading(false)
    }
    useEffect(() => {
        fetchCustomers()
    }, [])
    const saveCustomers = async (e) => {
        e.preventDefault()
        const newCustomer = {
            name: name,
            lastName: lastName,
            birthday: birthday,
            email: email,
            password: password,
            telephone: telephone,
            DUI: DUI,
            isVerified: isVerified
        }
        const response = await fetch(API,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCustomer),
        })
        if(!response.ok){
            throw new Error("Hubo un error al registrar el cliente")
        }
        const data = await response.json()
        toast.success('Cliente registrado')
        setCustomers(data)
        fetchCustomers()
        setName("")
        setlastName("")
        setBirthday("")
        setEmail("")
        setPassword("")
        setTelephone("")
        setDUI("")
        setIsVerified()
    }
    const deleteCustomers = async (id) => {
        const response = await fetch(`${API}/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        })
        if (!response.ok) {
          throw new Error("Hubo un error al eliminar el cliente")
        }
        toast.success('Cliente Eliminado');
        fetchCustomers()
      }
      const updateCustomers = async (dataCustomers) => {
        setId(dataCustomers._id)
        setName(dataCustomers.productName)
        setlastName(dataCustomers.lastName)
        setBirthday(dataCustomers.birthday)
        setEmail(dataCustomers.email)
        setPassword(dataCustomers.password)
        setTelephone(dataCustomers.telephone)
        setDUI(dataCustomers.DUI)
        setIsVerified(data.isVerified)
        setActiveTab("form")
    }
    const handleEdit = async (e) => {
        e.preventDefault()
        try {
            const editCustomer = {
                name: name,
                lastName: lastName,
                birthday: birthday,
                email: email,
                password: password,
                telephone: telephone,
                DUI: DUI,
                isVerified: isVerified
            }
            const response = await fetch(`${API}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(editCustomer)
            })
            if (!response.ok){
                throw new Error("Error al actualizar el cliente")
            }
            toast.success("Cliente actualizado")
            setId(""),
            setName("")
            setlastName("")
            setBirthday("")
            setEmail("")
            setPassword("")
            setTelephone("")
            setDUI("")
            setIsVerified(true),
            fetchCustomers()
        }catch(error){
            console.error("Error al editar el ciente: ", error)
        }
    }
    return{
        activeTab, setActiveTab,
id, setId,
name, setName,
lastName, setlastName,
birthday, setBirthday,
email, setEmail,
password, setPassword,
telephone, setTelephone,
DUI, setDUI,
isVerified, setIsVerified,
customers,
loading,
saveCustomers,
deleteCustomers,
updateCustomers,
handleEdit

    }
}
export default useDataCustomers
