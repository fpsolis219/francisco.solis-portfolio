import React from "react"
// import Header from "../components/Header"
import Footer  from "../components/Footer"
import Navbar from "../components/Navbar"
import Aboutme from "./Aboutme"
import Languages from "./Languages"
import Slides from "../components/Slides"


const Home = () => {
  
  
  return (

    

    <>
      <div className="text-center text-gold text-xl font-serif selection:bg-red-800 bg-slate-400 bg-gradient-to-l via-slate-100 from-slate-400" > 
        <div className="bg-cover h-[550px]" style={ {backgroundImage: "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80')"}} >
          
          <br/>
          <br/>
          <br/>
          <center> 
            <img
              className="mb-3 h-[170px] w-[170px] rounded-full shadow-lg border-4 border-slate-700"
              src="https://avatars.githubusercontent.com/u/106039705?v=4"
              alt=""
            />
          </center>
          <h1 className="underline-offset-8  text-5xl underline decoration-emerald-600 my-8"> <mark className="bg-zinc-800/75 text-gold"> Welcome to my Portfolio!</mark>
          </h1>
          <div className="my-8"> 
            <p><mark className="bg-zinc-800/75 text-gold text-2xl">My name is Francisco Solis and </mark>
            </p>
            <br/>
            <p><mark className="bg-zinc-800/75 text-gold text-2xl">I am an aspiring Full Stack web Developer.</mark>
            </p>
            <br/>
            <p><mark className="bg-zinc-800/75 text-gold text-2xl">Get to know me!</mark>
            </p>
          </div>
          
        </div>
        <div>
          <Navbar/>
        </div>
        <Slides/>
        <Aboutme/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Languages/>
        <Footer/>
      </div>
    </>
  )
}


export default Home