import React from "react"

const Aboutme = () => {
  return (
    <>
      <div className="underline-offset-4  text-5xl underline decoration-emerald-600 my-8 font-serif "> 
        <center><mark className="bg-zinc-800/75 text-gold"> About me </mark></center>
      </div>
      <div className="mx-20">
        <p> <mark className="bg-zinc-800/75 text-gold">I am a Army Veteran from Orange County, California and a father of two beautiful girls. Coming from the military I sought out a career that would best fit my skills that I acquired from my experience which was the ability to operate heavy Equipment. For awhile I settled in that profession and was proficient at it, but  was wanting to make a change that would better suite me and my family. Using the <a href="https://www.benefits.va.gov/gibill/fgib/vettec_providers.asp" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:animate-pulse"> VET-TEC </a> program I was able to put myself in a position that would allow me to learn how to become a software developer with the school of my choice. After some planning I was able to step into a software developing career starting @<a href="https://www.learnacademy.org/" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:animate-pulse">LEARN Academy</a></mark></p>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
      <div className="underline-offset-4  text-5xl underline my-8 font-serif "> 
        <center><mark className="bg-zinc-800/75 text-gold underline decoration-emerald-600"> Soft Skills</mark></center>
      </div>
      <div className="">
        <ul className="space-y-8 text-emerald-500"> 
          <li>Project Management</li>
          <li>Planning</li>
          <li>Active Listening</li>
          <li> Critical Thinking</li>
          <li>Goal Oriented</li>
        </ul>
      </div>

      
    </>
  )
}

export default Aboutme