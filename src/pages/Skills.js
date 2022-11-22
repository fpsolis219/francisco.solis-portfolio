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






export const Skills = () => {
  return (
    <>
      <div className="underline-offset-4 text-5xl underline my-8 font-serif ">
        <center><mark className="bg-zinc-800/75 text-gold"> Skills </mark></center>
        <br/>
        <br/>
        <div className="grid-row-3">
          <mark className="bg-zinc-800/75 space-x-4 flex-wrap flex p-8">
            <img src={HTML}/>
            <img src={CSS}/>
            <img src={Javascript}/>
            <img src={Ruby}/>
            <img src={Postgresql}/>
            <img src={Reactlogo}/>
            <img src={Rails}/>
            <img src={Postman}/>
            <img src={Tailwind}/>
          </mark>
        </div>
      </div>
    </>
  )
}
export default Skills