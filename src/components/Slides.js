import React from "react"
import { Carousel } from "flowbite-react"

const Slides = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 px-[80px]">
      <Carousel slideInterval={5000}>
        <img className="bg-cover"
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="..."
        />
        <img className="bg-contain"
          src="https://scontent.fmci1-4.fna.fbcdn.net/v/t1.6435-9/86341326_2708022845918861_44210950236012544_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=nyVcNBJ-b2EAX__KQCZ&_nc_ht=scontent.fmci1-4.fna&oh=00_AfBYkHnj3F3D1U3fIEHdjuthP36xyndY9jduRI9hQqnmuw&oe=639E5CD6"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
        />
      </Carousel>
    </div>
  )
}

export default Slides