import React from "react";
import {motion} from 'framer-motion'
import {assets} from '../assets/assets'

const Hero =() =>{
 return(
  <motion.div
    initial = {{opacity:0 , y:50}}  
    whileInView={{opacity:1 ,y:0}}
    transition={{duration: 0.6, ease:'easeOut'}}
    viewport={{once:true}}
    id="home"
    className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] "
    >
    {/* ab yeh wala div humara container hoga main */}
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                
                
             {/* left side content hai is mein */}
         <div className=" md:w-1/2 mb-10 md:mb-0">
                       <h1 className="text-4xl md:text-6xl font-bold md-4">
                            Hi, I'm <span className="text-purple">Kainat Shafiq</span>
                       </h1>
                       {/* an h2 mein humy type writing animation effect add karna hai tph hum css wali file say karn gt */}
                       <h2 className=" text-2xl md:text-4xl font-semibold mb-6 typewriter">
                           Frontend Developer
                       </h2>

                       <p  className="text-lg text-gray-300 mb-8">
                         I build responsive and user-friendly web applications using modern technologies like React, JavaScript, and CSS.
                       </p>

                       <div className="flex space-x-4">
                        <a href="#projects" className="px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300"
                          >View Work</a>
                        <a href="#contact" className="px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple/20 transition decoration-purple-300">Contact Me</a>
                       </div>
         </div>

            {/* right side wala content is mein hai */}
         <div className="md:w-1/2 flex justify-center">
             {/* picture jab animate ho rahii hai toh backgroud mein purple color dekh raha hai */}
              <div  className="relative w-64 h-64 md:w-80 md:h-80">
                 {/* Background Circle */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-70">
                         <motion.img 
                            // yahn hum animation den gy 
                                 animate={{y:[0, -20, 0]}}
                                 transition={{
                                  duration:4,
                                  repeat :Infinity,
                                  repeatType:"loop",
                                  ease:"easeInOut"
                                    }}
                                   className=" relative  w-full h-full rounded-full object-cover z-10"
                                   src={assets.profileImg}/>

                                  
                     </div>
                </div>
         </div>

    </div>

     

   </motion.div>
   
    )
}
export default Hero;