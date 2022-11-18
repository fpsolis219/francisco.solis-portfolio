import React from "react"
// import Header from "../components/Header"
import Footer  from "../components/Footer"
import Navbar from "../components/Navbar"
import Aboutme from "./Aboutme"

const Home = () => {
  
  
  return (

    

    <>
      <div className="text-center text-gold text-2xl font-serif selection:bg-red-800 bg-slate-700 bg-gradient-to-r via-slate-300 from-red-800" > 
        <div className="bg-cover h-[550px]" style={ {backgroundImage: "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80')"}} >
          <br/>
          <br/>
          <br/>
          <center> 
            <img
              className="mb-3 h-[170px] w-[170px] rounded-full shadow-lg"
              src="https://media-exp1.licdn.com/dms/image/sync/C5627AQFh79ey-e1P0g/articleshare-shrink_480/0/1668314287064?e=1669266000&v=beta&t=QFYQ2Ns6vaRq8FppoVUioZybwhpbveyEw8DIAM6csf0"
              alt="Bonnie image"
            />
          </center>
          <h1 className="underline-offset-8  text-5xl underline my-8"> <mark className="bg-red-800/75 text-gold"> Welcome to my Portfolio!</mark>
          </h1>
          <div className="my-8"> 
            <p><mark className="bg-red-800/50 text-gold">My name is Francisco Solis and </mark>
            </p>
            <br/>
            <p><mark className="bg-red-800/50 text-gold">I am an aspiring Full Stack web Developer.</mark>
            </p>
            <br/>
            <p><mark className="bg-red-800/50 text-gold">Get to know me!</mark>
            </p>
          </div>
          
        </div>
        <div>
          <Navbar/>
        </div>
        <Aboutme/>
        <Footer/>
      </div>
    </>
  )
}


export default Home