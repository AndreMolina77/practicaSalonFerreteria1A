import React from "react";
import CustomersList from "../components/Customers/CustomersList";
import FormCustomers from "../components/Customers/FormCustomers";
import useDataCustomers from "../components/Customers/hooks/useDataCustomers"

const Customers = () => {
    const {
        activeTab, setActiveTab,
        id, 
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
    } = useDataCustomers()

    return(
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Clientes</h1>
            </div>
            <div className="flex border-b border-gray-200 mb-4">
                <button className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:border-b-2 focus:border-blue-500" onClick={() => setActiveTab("list")}>
              Lista de clientes
              </button>
            <button className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:border-b-2 focus:border-blue-500" onClick={() => setActiveTab("form")}>
              Gestionar Clientes
            </button>
          </div>
          <div>
            {activeTab === "list" && (
              <div>
                <CustomersList 
                customers={customers} 
                loading={loading} 
                deleteCustomers={deleteCustomers} 
                updateCustomers={updateCustomers}/>
              </div>
            )}
            {activeTab === "form" && (
              <div>
                <FormCustomers
                setCustomerName={setName} 
                setCustomerLastName={setlastName} s
                setCustomerBirthday={setBirthday} 
                setCustomerEmail={setEmail} 
                setCustomerPassword={setPassword} 
                setCustomerTelephone={setTelephone} 
                setCustomerDUI={setDUI} 
                setCustomerIsVerified={setIsVerified} 
                id={id} 
                handleEdit={handleEdit} 
                saveCustomers={saveCustomers}
                customerName={name}
                customerLastName={lastName}
                customerBirthday={birthday}
                customerEmail={email}
                customerPassword={password}
                customerTelephone={telephone}
                customerDUI={DUI}
                customerIsVerified={isVerified}
                />
              </div>
            )}
          </div>
        </div>
    )
}

export default Customers