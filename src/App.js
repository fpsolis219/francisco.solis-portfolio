import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
// import Aboutme from "./pages/Aboutme"
// import Contact from "./pages/Contact"
// import Experience from "./pages/Experience"
// import Interests from "./pages/Interests"


const App = () => {
  return (
    <> 
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/aboutme" element={<Aboutme/>} />
        <Route path="/experience" element={<Experience/>} />
        <Route path="/projects" element={<Interests/>} />
        <Route path="/contact" element={<Contact/>} /> */}
      </Routes>
    </>
    
  )
}

export default App
