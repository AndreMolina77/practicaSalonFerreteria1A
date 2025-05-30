import React from 'react'
import {BrowserRouter as Router} from "react-router-dom"
import Navigation from "./components/Navigation.jsx"
import {Toaster} from "react-hot-toast"

function App() {
  return (
    <>
      <Router>
        <Navigation/>
      </Router>
      <Toaster toastOptions= {{duation: 1500}} />
    </>
  )
}

export default App
