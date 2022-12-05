import React from "react"
import {projects} from "../components/ProjectData"



const Projects2 = () => {
    return(
    <>
     <center><mark className="bg-zinc-800/75 text-gold text-5xl underline decoration-emerald-600 underline-offset-4  "> Projects </mark></center>
      <br/>
      {projects?.map(project, index) => {
        return (
            <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={GRD}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Gym Rat Deals
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <div>
              <button className= "py-2 px-8  bg-[#3a424c] hover:bg-gray-800 border bg-gradient-to-r from-slate-300 shadow-xl rounded-lg focus:outline-none "><a href="https://gymratdeals.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-8">Check it out!</a></button>
            </div>
          </Card>
        )
      }}
    </>
    )
}
export default Projects2