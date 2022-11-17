import React from "react"
// import Header from "../components/Header"
import Footer  from "../components/Footer"
import Navbar from "../components/Navbar"
import Aboutme from "./Aboutme"

const Home = () => {
  
  
  return (
    

    <>
      <div className="bg-cover text-center text-gold text-2xl font-serif h-auto w-auto selection:bg-red-800 bg-slate-300 border-[30px] border-red-800 border-opacity-75 " > 
        <div className="bg-contain p-8 mx-[60px] border-4 border-gold my-8"
          style={ {backgroundImage: "url('https://images.unsplash.com/photo-1586013277290-a94871df7bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80')"}} 
        > 
        
          {/* <Header/> */}
          <center> 
            <img
              className="mb-3 h-[170px] w-[170px] rounded-full shadow-lg my-8"
              src="https://media-exp1.licdn.com/dms/image/sync/C5627AQFh79ey-e1P0g/articleshare-shrink_480/0/1668314287064?e=1669266000&v=beta&t=QFYQ2Ns6vaRq8FppoVUioZybwhpbveyEw8DIAM6csf0"
              alt="Bonnie image"
            />
          </center>
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
        <Aboutme/>
        <Footer/>
      </div>
    </>
  )
}


export default Home