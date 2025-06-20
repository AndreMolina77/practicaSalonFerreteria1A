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

const useDataEmployees = () => {
    const [activeTab, setActiveTab] = useState("list");
    const API = "http://localhost:5000/api/employee";
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [lastName, setlastName] = useState("")
    const [birthday, setBirthday] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [password, setPassword] =useState("")
    const [hireDate, setHireDate] = useState("")
    const [telephone, setTelephone] = useState("")
    const [dui, setDui] = useState("")
    const [isVerified, setIsVerified] = useState(false)
    const [employee, setEmployee] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchEmployee = async () => {
        const response = await fetch(API)
        if(!response.ok){
            throw new Error("Hubo un error al obtener los empleados")
        }
        const data = await response.json()
        setEmployee(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchEmployee()
    }, [])
    
    

    
    const saveEmployee = async (e) => {
        e.preventDefault()
        const newEmployee = {
            name: name,
            lastName: lastName,
            birthday: birthday,
            email: email,
            address: address,
            password: password,
            hireDate: hireDate,
            telephone: telephone,
            dui: dui,
            isVerified: isVerified
        }
        const response = await fetch(API,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newEmployee),
        })
        if(!response.ok){
            throw new Error("Hubo un error al registrar el empleado")
        }
        const data = await response.json()
        toast.success('Empleado registrado')
        setEmployee(data)
        fetchEmployee()
        setName("")
        setlastName("")
        setBirthday("")
        setEmail("")
        setAddress("")
        setPassword("")
        setHireDate("")
        setTelephone("")
        setDui("")
        setIsVerified()
    }
    const deleteEmployee = async (id) => {
        const response = await fetch(`${API}/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        })
        if (!response.ok) {
          throw new Error("Hubo un error al eliminar el empleado")
        }
        toast.success('Empleado Eliminado');
        fetchEmployee()
      }
      const updateEmployee = async (dataEmployee) => {
        setId(dataEmployee._id)
        setName(dataEmployee.productName)
        setlastName(dataEmployee.lastName)
        setBirthday(dataEmployee.birthday)
        setEmail(dataEmployee.email)
        setPassword(dataEmployee.password)
        setTelephone(dataEmployee.telephone)
        setDui(dataEmployee.dui)
        setIsVerified(data.isVerified)
        setActiveTab("form")
    }
    const handleEdit = async (e) => {
        e.preventDefault()
        try {
            const editEmployee = {
              name: name,
              lastName: lastName,
              birthday: birthday,
              email: email,
              address: address,
              password: password,
              hireDate: hireDate,
              telephone: telephone,
              dui: dui,
              isVerified: isVerified
            }
            const response = await fetch(`${API}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(editEmployee)
            })
            if (!response.ok){
                throw new Error("Error al actualizar el Empleado")
            }
            toast.success("Empleado actualizado")
            setId("")
            setName("")
            setlastName("")
            setBirthday("")
            setEmail("")
            setAddress("")
            setPassword("")
            setHireDate("")
            setTelephone("")
            setDui("")
            setIsVerified(true)
            fetchEmployee()
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
        address, setAddress,
        password, setPassword,
        hireDate, setHireDate,
        telephone, setTelephone,
        dui, setDui,
        isVerified, setIsVerified,
        employee,
        loading,
        saveEmployee,
        deleteEmployee,
        updateEmployee,
        handleEdit
    }
}
export default useDataEmployees
