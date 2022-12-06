import React from "react"
import  HTML  from "../assets/html-5-svgrepo-com.svg"
import CSS from "../assets/css-3-logo-svgrepo-com.svg"
import Javascript from "../assets/js-svgrepo-com.svg"
import Ruby from "../assets/ruby-svgrepo-com.svg"
import Postgresql from "../assets/postgresql-svgrepo-com.svg"
import Reactlogo from "../assets/react-svgrepo-com.svg"
import Rails from "../assets/rails-svgrepo-com.svg"
import Postman from "../assets/postman-icon-svgrepo-com.svg"
import Tailwind from "../assets/tailwindcss-icon-svgrepo-com.svg"






export const Languages = () => {
  return (
    <>
      <div className="underline-offset-4  my-8 font-serif border-black place-content-evenly bg-slate-700 bg-gradient-to-r from-red-800">
        <br/>
        <br/>
        <center>
          <mark className="bg-zinc-800/75 text-5xl underline decoration-emerald-700 text-gold my-8" id="languages"> Languages </mark>
        </center>
        <div className="mx-20 my-8">
          <p><mark className="bg-zinc-800/75 text-gold">@LEARN Academy I went through an accelerated course where I learned the fundamentals of both the front-end and back-end of web development and acquired an internship opportunity to gain real experience as a full stack developer. Within the course and I acquired the knowledge for the following coding languages and frameworks: HTML, CSS, Javascript, React, Ruby, Postgresql, Postman, Rails, React in Rails, TailwindCSS and others.</mark> </p>
        </div>
        <br/>
        <br/>
        <center className="grid grid-cols-3 space-y-4">
          <a href="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer"><img className="shadow-2xl hover:animate-[pulse_1s_ease-in-out_infinite]" src={HTML}/></a>
          <a href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer"><img className="shadow-2xl hover:animate-[pulse_1s_ease-in-out_infinite]"  src={CSS}/></a>
          <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer"><img className="shadow-2xl hover:animate-[pulse_1s_ease-in-out_infinite]"  src={Javascript}/></a>
          <a href="https://www.ruby-lang.org/en/" target="_blank" rel="noopener noreferrer"><img className="shadow-2xl hover:animate-[pulse_1s_ease-in-out_infinite]"  src={Ruby}/></a>
          <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer"><img className="shadow-2xl hover:animate-[pulse_1s_ease-in-out_infinite]"  src={Postgresql}/></a>
          <a href="https://reactjs.org/tutorial/tutorial.html" target="_blank" rel="noopener noreferrer"><img className="shadow-2xl hover:animate-[pulse_1s_ease-in-out_infinite]"  src={Reactlogo}/></a>
          <a href="https://rubyonrails.org/" target="_blank" rel="noopener noreferrer"><img className="shadow-2xl hover:animate-[pulse_1s_ease-in-out_infinite]"  src={Rails}/></a>
          <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer"><img className="shadow-2xl hover:animate-[pulse_1s_ease-in-out_infinite]"  src={Postman}/></a>
          <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer"><img className="shadow-2xl hover:animate-[pulse_1s_ease-in-out_infinite]"  src={Tailwind}/></a>


        </center>
        
      </div>
     
    </>
  )
}
export default Languages