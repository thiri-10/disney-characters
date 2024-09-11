
"use client";
import Image from "next/image";

import { useState } from "react";
import { motion } from "framer-motion";


const pictures = [
  {
    id: 1,
    image: "brave.jpg",
    title: "Brave girl",
    movie: "Brave"
  },
  {
    id: 2,
    image: "enola.jpg",
    title: "Enola",
    movie: "The Incredibles"
  },
  {
    id: 3,
    image: "mulan.jpg",
    title: "Mulan",
    movie: "Mulan"
  },
  {
    id: 4,
    image: "sad-1.jpg",
    title: "Sad",
    movie: "Inside out"
  },
  {
    id: 5,
    image: "snowwhite.jpg",
    title: "Snowwhite",
    movie: "Snow White and the seven dawgs"
  },
  {
    id: 6,
    image: "tangled.jpg",
    title: "Tangled",
    movie: "Tangled"
  },
]
export default function Home() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  }

  return (




    <main className="container  mx-auto mt-[30px] lg:w-[1100px] lg:h-[650px] w-full shadow-2xl   rounded-2xl bg-white">

      <nav className="flex justify-between  p-8">
        <div className="">
          <p>Disney Characters</p>
        </div>
        <div >
          <input type="text" className="inline-block rounded "
            placeholder="Search characters"></input>

        </div>
        <div >
          <p className="font-semibold">Menu</p>
        </div>
      </nav>

      <div className="relative overflow-hidden  mt-10">

        {/* first card */}

        <motion.div
          className="flex flex-row items-center  gap-4 mt-5"
          initial={{ x: 0 }}
          animate={{ x: -currentIndex * 300 }} // Assume 300px per card
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {
            pictures.map((pic: any) => (

              <div key={pic.id}  className="rounded-xl  shadow-lg bg-white mt-12 sm:mt-20  
              ">

                <motion.div className="relative lg:w-[380px] h-[200px] w-[300px] overflow-visible">
                  <img className="w-50 h-64
              absolute top-0 left-1/2 transform -translate-x-1/2 
              -translate-y-1/4 object-cover hover:-translate-y-1/3"
                    src={pic.image}
                    alt={pic.title} />
                </motion.div>
                <div className="pt-2 px-6 pb-2">
                  <p className="font-semibold text-3xl ">{pic.title}</p>
                </div>
                <div className="pt-4 px-6 pb-4">
                  <span className=" text-gray-700 text-opacity-50">Movie</span>
                  <span className="font-semibold ml-2">{pic.movie}</span>

                </div>



              </div>


            ))
          }


        </motion.div>

        <div className="text-right pt-4 m-2">
        <button className="px-4 text-semibold rounded-2xl hover:border-2  mx-2" onClick={prevSlide}>Prev</button>
        <button className="px-4 text-semibold rounded-2xl hover:border-2 mx-2 " onClick={nextSlide}>Next</button>

        </div>

      </div>



    </main>
  );
}
