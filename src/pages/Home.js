import React from "react"
// import Header from "../components/Header"
import Footer  from "../components/Footer"
import Navbar from "../components/Navbar"

const Home = () => {
  
  
  return (

    <>
    
      <div className="bg-cover text-center text-gold text-2xl font-serif h-auto w-auto selection:bg-red-800 bg-slate-300 border-[30px] border-red-800 border-opacity-75 " > 
        <div className="bg-contain p-8 mx-[60px] border-4 border-gold my-8"
          style={ {backgroundImage: "url('https://images.unsplash.com/photo-1586013277290-a94871df7bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80')"}} 
        > 
        
          {/* <Header/> */}
          <h1 className="text-underline-offset-4  text-5xl underline my-8"> <mark className="bg-red-800/50 text-gold"> Welcome to my Porfolio!</mark>
          </h1>
          <div className="my-8"> 
            <p><mark className="bg-red-800/50 text-gold">My name is Francisco Solis and </mark>
            </p>
            <p><mark className="bg-red-800/50 text-gold">I am an aspiring Full Stack web Developer.</mark>
            </p>
            <p><mark className="bg-red-800/50 text-gold">Here you will find information about me, my experience/skills, projects and contact information for potential opportunities</mark>
            </p>
          </div>
        </div>
        <div className="">
          <Navbar/>
        </div>
        <Footer/>
      </div>
    </>
  )
}


export default Home