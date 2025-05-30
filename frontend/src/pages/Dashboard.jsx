import React, { useEffect, useState } from "react"
import CardDashboard from "../components/CardDashboard.jsx"

const Dashboard = () => {
  const [data, setData] = useState({
    brands: 0,
    customers: 0,
    products: 0
  })
  const fetchData = async () => {
    try {
      const brandsResponse = await fetch("http://localhost:5000/api/brands")
      const customersResponse = await fetch("http://localhost:5000/api/customers")
      const productsResponse = await fetch("http://localhost:5000/api/products")

      const brandsData = await brandsResponse.json()
      const customersData = await customersResponse.json()
      const productsData = await productsResponse.json()

      setData({
        brands: brandsData.length,
        customers: customersData.length,
        products: productsData.length
      })
    } catch (error) {
      console.error("Error al obtener datos: ", error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CardDashboard label="Marcas" data={data.brands}/>
          <CardDashboard label="Clientes" data={data.customers}/>
          <CardDashboard label="Productos" data={data.products}/>
        </div>
      </div>
    </div>
  )
}
export default Dashboard