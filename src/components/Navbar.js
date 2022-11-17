import React from "react"
import { Button } from "flowbite-react"





const Navbar = () => {
  return (
    <>
      <div className="space-x-4 p-8 border-4 border-gold mx-[60px] my-8 flex flex-auto place-content-evenly"
        style={ {backgroundImage: "url('https://images.unsplash.com/photo-1586013277290-a94871df7bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80')"}}>

        <Button className="bg-slate-800 hover:bg-slate-600"><a href="/experience" className="underline underline-offset-8"> About me </a></Button>
        <Button className="bg-slate-800 hover:bg-slate-600"><a href="/experience" className="underline underline-offset-8">Experience/skills</a></Button>
        <Button className="bg-slate-800 hover:bg-slate-600"><a href="/projects" className="underline underline-offset-8">Projects</a></Button>
        <Button className="bg-slate-800 hover:bg-slate-600"><a href="/interests" className="underline underline-offset-8">Interests</a></Button>
        <Button className="bg-slate-800 hover:bg-slate-600"><a href="/contact" className="underline underline-offset-8">Contact Information</a></Button>  
      </div>
      

    </>
  )
}

export default Navbar