"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";


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
  ];
export default function Character(){

  const router = useRouter();

   const {id} = useParams();
   const [character] = pictures.filter((pic)=>pic.id === +id);
  // const {pic} = useParams();
  // const character = [pic];
  console.log(character)
 

    return (
        <div className="shadow-md border rounded-xl w-3/4  mx-auto mt-20">
        {
           <div className="flex justify-center w-full h-full gap-5 py-6">
            <motion.div className="md:shrink-0" initial={{x: -700}} animate={{ x: 0}} transition={{delay: 0.3,stiffness:40, type:"spring"}}>
            <img className="w-64 h-full md:h-[400px] lg:h-[500px] object-cover overflow-visible" src={`/${character.image}`} alt={character.title}/>

            </motion.div>
            
            <motion.div className="px-2" initial={{x:1200}} animate={{x:0}} transition={{delay:0.3,stiffness:40,type:"spring"}}>
                <p className="font-bold text-2xl md:text-4xl ">{character.movie}</p>
                <p className="text-gray-400">{character.title}</p>
            </motion.div>

           </div>
        }
        <button onClick={()=>{ router.push('/') }} className="text-gray-300 text-xl md:text-3xl">Back</button>
        </div>
    )
}