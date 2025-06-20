import React from "react"
import NavBar from "./Navbar.jsx"
import {Route, Routes} from "react-router-dom"
import Dashboard from "../pages/Dashboard.jsx";
import Employees from "../pages/Employees.jsx"
import Customers from "../pages/Customers.jsx"
import Products from "../pages/Products.jsx"

function Navigation(){
    return(
        <>
        <NavBar />
        <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/employee" element={<Employees />}/>
            <Route path="/customers" element={<Customers />}/>
            <Route path="/products" element={<Products />}/>
        </Routes>
        </>
    )
}

export default Navigation