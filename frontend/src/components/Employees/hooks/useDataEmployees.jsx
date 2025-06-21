import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const useDataEmployees = () => {
  const API = "http://localhost:5000/api/employee";

  const [activeTab, setActiveTab] = useState("list");

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [hireDate, setHireDate] = useState("");
  const [telephone, setTelephone] = useState("");
  const [dui, setDui] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [isssnumber, setisssnumber] = useState("");

  const [employee, setEmployee] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEmployee = async () => {
    const response = await fetch(API);
    if (!response.ok) throw new Error("Error fetching employees");
    const data = await response.json();
    setEmployee(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchEmployee();
  }, []);

  const resetForm = () => {
    setId("");
    setName("");
    setLastName("");
    setBirthday("");
    setEmail("");
    setAddress("");
    setPassword("");
    setHireDate("");
    setTelephone("");
    setDui("");
    setIsVerified(false);
    setisssnumber("");
  };

  const saveEmployee = async (e) => {
    e.preventDefault();
    const newEmployee = {
      name,
      lastName,
      birthday,
      email,
      password,
      telephone,
      dui,
      isssnumber,
      hireDate,
      isVerified,
      address
    };

    const response = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEmployee)
    });

    if (!response.ok) throw new Error("Error saving employee");

    toast.success("Empleado registrado");
    fetchEmployee();
    resetForm();
  };

  const deleteEmployee = async (id) => {
    const response = await fetch(`${API}/${id}`, { method: "DELETE" });
    if (!response.ok) throw new Error("Error deleting employee");
    toast.success("Empleado eliminado");
    fetchEmployee();
  };

  const updateEmployee = async (dataEmployee) => {
    setId(dataEmployee._id ?? "");
    setName(dataEmployee.name ?? "");
    setLastName(dataEmployee.lastName ?? "");
    setBirthday(dataEmployee.birthday ?? "");
    setEmail(dataEmployee.email ?? "");
    setPassword(dataEmployee.password ?? "");
    setTelephone(dataEmployee.telephone ?? "");
    setDui(dataEmployee.dui ?? "");
    setHireDate(dataEmployee.hireDate ?? "");
    setIsVerified(dataEmployee.isVerified ?? false);
    setAddress(dataEmployee.address ?? "");
    setisssnumber(dataEmployee.isssnumber ?? "");
    setActiveTab("form");
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const editedEmployee = {
      name,
      lastName,
      birthday,
      email,
      password,
      telephone,
      dui,
      isssnumber,
      hireDate,
      isVerified,
      address
    };

    const response = await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedEmployee)
    });

    if (!response.ok) throw new Error("Error updating employee");

    toast.success("Empleado actualizado");
    fetchEmployee();
    resetForm();
  };

  return {
    activeTab, setActiveTab,
    id, setId,
    name, setName,
    lastName, setLastName,
    birthday, setBirthday,
    email, setEmail,
    address, setAddress,
    password, setPassword,
    hireDate, setHireDate,
    telephone, setTelephone,
    dui, setDui,
    isVerified, setIsVerified,
    isssnumber, setisssnumber,
    employee,
    loading,
    saveEmployee,
    deleteEmployee,
    updateEmployee,
    handleEdit
  };
};

export default useDataEmployees;
