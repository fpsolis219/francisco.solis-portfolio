import React from "react"
import { Carousel } from "flowbite-react"
import Kailena from "../assets/Kailena.JPG"
import Camila from "../assets/Camila.JPG"






const Slides = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000}>
        <img className="h-[380px] w-screen " 
          src="https://storage.googleapis.com/proudcity/santaanaca/uploads/2020/07/Water-Tower-150th-Logo-scaled.jpg"
          alt="..."
        />
        <img className="h-screen w-auto"
          src="https://scontent.fmci1-4.fna.fbcdn.net/v/t1.6435-9/52749985_2566317043409796_8511133328076701696_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=mJCb7BJGakIAX_09NaD&_nc_ht=scontent.fmci1-4.fna&oh=00_AfBUdSwR2nrjtWcOjnV3l42GIEq8YcnyybcFMd1CWxReIw&oe=639F7966"
          alt="..."
        />
        <img className="h-screen w-screen"
          src="https://images.unsplash.com/photo-1523848309072-c199db53f137?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="..."
        />
        <img className="h-[380px] w-[330px]"
          src= {Kailena}
          alt="..."
        />
        <img className="h-[380px] w-[330px]"
          src={Camila}
          alt="..."
          
        />
      </Carousel>
    </div>
  )
}

export default Slides