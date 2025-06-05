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
    const [isVerified, setIsVerified] = useState(true)
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

}