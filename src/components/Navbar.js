import React from "react"
import { Button } from "flowbite-react"





const Navbar = () => {
  return (
    <>
      <div className="space-x-4 p-8 border-4 border-black flex flex-auto place-content-evenly bg-slate-700 bg-gradient-to-r from-red-800">

        <Button className="bg-slate-600 hover:bg-slate-700 shadow-2xl"><a href="/experience" className="underline underline-offset-8"> About me </a></Button>
        <Button className="bg-slate-600 hover:bg-slate-700 shadow-2xl"><a href="/projects" className="underline underline-offset-8">Projects</a></Button>
        <Button className="bg-slate-600 hover:bg-slate-700 shadow-2xl"><a href="/interests" className="underline underline-offset-8">Interests</a></Button>
        <Button className="bg-slate-600 hover:bg-slate-700 shadow-2xl"><a href="/contact" className="underline underline-offset-8">Contact Information</a></Button>
          
      </div>
      

    </>
  )
}

export default Navbar