import React, { useState } from "react";
import { FaBars,FaXmark } from "react-icons/fa6";
const Navbar =()=>{

    const [showMenu, setShowMenu] = useState(false);
   //   const renderIcon = () => {
   //               if (showMenu) {
   //                  return <FaXmark onClick={() => setShowMenu(false)} className="text-2xl cursor-pointer" />;
   //                } else {
   //                   return <FaBars onClick={() => setShowMenu(true)} className="text-2xl cursor-pointer" />;
   //                           }
   //              };
    return(
        <nav className="fixed w-full z-500 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg">
           {/* ab is k ander hum aik container banayen gy */}
            <div className="container mx-auto flex justify-between items-center">
                  <div>
                       <a href="#" className="text-3xl font-bold text-white">
                            Kainat
                            <span className="text-purple">Shafiq</span>
                            <div className="w-4 h-4 bg-purple rounded-full"></div>
                       </a>
                  </div>
                  <div className="hidden md:flex space-x-10">
                        {/* is div mein hum nav bar mein home ,about, par hover krny say jo effect dekh raha wo yahn say dekhy ga */}
                         <a  href="#home" className="relative text-white/80 transition duration-300 hover:text-purple group">
                            <span>Home</span>
                            {/* hover karny k bad jo horizonatl line jo text k nechy show ho rahii hein */}
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
                         </a>

                          <a  href="#about" className="relative text-white/80 transition duration-300 hover:text-purple group">
                            <span>About</span>
                            {/* hover karny k bad jo horizonatl line jo text k nechy show ho rahii hein */}
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
                         </a>

                          <a  href="#skills" className="relative text-white/80 transition duration-300 hover:text-purple group">
                            <span>Skills</span>
                            {/* hover karny k bad jo horizonatl line jo text k nechy show ho rahii hein */}
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
                         </a>


                          <a  href="#projects" className="relative text-white/80 transition duration-300 hover:text-purple group">
                            <span>Projects</span>
                            {/* hover karny k bad jo horizonatl line jo text k nechy show ho rahii hein */}
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
                         </a>

                          <a  href="#experience" className="relative text-white/80 transition duration-300 hover:text-purple group">
                            <span>Learning Journey</span>
                            {/* hover karny k bad jo horizonatl line jo text k nechy show ho rahii hein */}
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
                         </a>

                          <a  href="#contact" className="relative text-white/80 transition duration-300 hover:text-purple group">
                            <span>Contact</span>
                            {/* hover karny k bad jo horizonatl line jo text k nechy show ho rahii hein */}
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
                         </a>
                  </div>


            {/* ab yahn hum mobile menu k liye kaam karen gy is div mein */}
            {/* <FaXmark /> Is ka matlab hota hai ❌ close icon (cross) */}
            {/* <FaBars />:Is ka matlab hota hai ☰ menu (hamburger icon) */}
            <div className="md:hidden">

                  {/* ab yahn hum condition check karen gy showMenu ki */}
                  {
                    showMenu ?
                    <FaXmark onClick={() => setShowMenu(!showMenu)} className="text-2xl cursor-pointer"/> :
                    <FaBars  onClick={() => setShowMenu(!showMenu)}  className="text-2xl cursor-pointer"/>
                  }
                  
                   {/* {renderIcon()} */}
               
                 
            </div>
            </div>
             {/* jab button click ho toh mobile menu show ho */}
             {/* React ka conditional rendering syntax hai. matlb aghr showMenu condition true hai toh next condition show karo */}
             {
               showMenu && (
                  <div className="md:hidden mt-4 bg-dark-300--screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center">
                         <a  onClick={() => setShowMenu(!showMenu)} href="#home" className="relative text-white/80 transition duration-300 hover:text-purple group">
                            <span>Home</span>                        
                         </a>

                          <a onClick={() => setShowMenu(!showMenu)} href="#about" className="relative text-white/80 transition duration-300 hover:text-purple group">
                            <span>About</span>                           
                         </a>

                          <a onClick={() => setShowMenu(!showMenu)} href="#skills" className="relative text-white/80 transition duration-300 hover:text-purple group">
                             <span>Skills</span>
                           </a>


                          <a onClick={() => setShowMenu(!showMenu)} href="#projects" className="relative text-white/80 transition duration-300 hover:text-purple group">
                             <span>Projects</span>
                         </a>

                          <a onClick={() => setShowMenu(!showMenu)} href="#experience" className="relative text-white/80 transition duration-300 hover:text-purple group">
                            <span>Learning Journey</span>
                            
                         </a>

                          <a onClick={() => setShowMenu(!showMenu)} href="#contact" className="relative text-white/80 transition duration-300 hover:text-purple group">
                            <span>Contact</span>
                         </a>

                  </div>
               )
             }
            
        </nav>
    )
}
export default Navbar;