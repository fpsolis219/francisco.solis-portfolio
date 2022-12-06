import React from "react"
import { Card } from "flowbite-react"

// import {projects} from "../components/projectdata"



const ProjectIndex = ({ projects }) => {
  console.log(projects)
  return (
    <>
      <center><mark className="bg-zinc-800/75 text-gold text-5xl underline decoration-emerald-600 underline-offset-4  "> Projects </mark></center>
      <br/>
      <center className="grid-rows-2 columns-2">
        <div className="max-w-sm mx-8">
          {projects.map((project, index) => {
            return (
              <>
                <Card
                  imgAlt="Meaningful alt text for an image that is not purely decorative"
                  imgSrc={project.image}
                  key={index}
                >
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {project.name}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {project.description}
                  </p>
                  <div>
                    <button className= "py-2 px-8  bg-[#3a424c] hover:bg-gray-800 border bg-gradient-to-r from-slate-300 shadow-xl rounded-lg focus:outline-none "><a href={project.link} target="_blank" rel="noopener noreferrer" className="underline underline-offset-8">Check it out!</a></button>
                  </div>
                </Card>
              </>
            )
          })}
        </div>
      </center>
    </>
  )
}
  
export default ProjectIndex

