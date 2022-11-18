import React from "react"
import { Button } from "flowbite-react"





const Navbar = () => {
  return (
    <>
      <div className="space-x-4 p-8 flex flex-auto border-y border-black place-content-evenly bg-slate-700 bg-gradient-to-r from-red-800">

        <Button className="bg-gray-600 hover:bg-gray-400 shadow-xl"><a href="" className="underline underline-offset-8">About me</a></Button>
        <Button className="bg-gray-600 hover:bg-gray-400 shadow-xl"><a href="" className="underline underline-offset-8">Experience</a></Button>
        <Button className="bg-gray-600 hover:bg-gray-400 shadow-xl"><a href="" className="underline underline-offset-8">Projects</a></Button>
        <Button className="bg-gray-600 hover:bg-gray-400 shadow-xl"><a href="" className="underline underline-offset-8">Interests</a></Button>
        <Button className="bg-gray-600 hover:bg-gray-400 shadow-xl"><a href="" className="underline underline-offset-8">Contact Information</a></Button>
          
      </div>
      

    </>
  )
}

export default Navbar