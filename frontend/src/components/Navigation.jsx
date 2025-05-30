import React from "react"
import NavBar from "./Navbar.jsx"
import {Route, Routes} from "react-router-dom"
import Dashboard from "../pages/Dashboard.jsx";
import Brands from "../pages/Brands.jsx"
import Customers from "../pages/Customers.jsx"
import Products from "../pages/Products.jsx"

function Navigation(){
    return(
        <>
        <NavBar />
        <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/brands" element={<Brands />}/>
            <Route path="/customers" element={<Customers />}/>
            <Route path="/products" element={<Products />}/>
        </Routes>
        </>
    )
}

export default Navigation