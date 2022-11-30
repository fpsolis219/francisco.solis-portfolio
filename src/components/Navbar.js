import React from "react"
// import { Button } from "flowbite-react"





const Navbar = () => {
  return (
    <>
      <div className="space-x-4 p-8 flex flex-auto border-y border-black place-content-evenly bg-slate-700 bg-gradient-to-r from-red-800">

        <button className= "py-2 px-8 bg-[#3a424c] hover:bg-gray-800 border bg-gradient-to-r from-slate-300 shadow-xl rounded-lg focus:outline-none "><a href="" className="underline underline-offset-8">About me</a></button>
        <button className="py-2 px-8 bg-[#3a424c] hover:bg-gray-800 border bg-gradient-to-r from-slate-300 shadow-xl rounded-lg focus:outline-none"><a href="" className="underline underline-offset-8">Languages</a></button>
        <button className="py-2 px-8 bg-[#3a424c] hover:bg-gray-800 border bg-gradient-to-r from-slate-300 shadow-xl rounded-lg focus:outline-none"><a href="" className="underline underline-offset-8">Projects</a></button>
        <button className="py-2 px-8 bg-[#3a424c] hover:bg-gray-800 border bg-gradient-to-r from-slate-300 shadow-xl rounded-lg focus:outline-none"><a href="" className="underline underline-offset-8">Interests</a></button>
        <button className="py-2 px-8 bg-[#3a424c] hover:bg-gray-800 border bg-gradient-to-r from-slate-300 shadow-xl rounded-lg focus:outline-none"><a href="" className="underline underline-offset-8">Contact Information</a></button>
          
      </div>
      

    </>
  )
}

export default Navbar