import React from "react";
import { motion } from "framer-motion";
import { aboutInfo, assets } from "../assets/assets";

const About=() =>{

    return(
        <motion.div
        initial = {{opacity:0 , y:50}}  
        whileInView={{opacity:1 ,y:0}}
        transition={{duration: 0.6, ease:'easeOut'}}
        viewport={{once:true}}
        id="about"
        className="py-20 bg-dark-200 "
        >
            <div className="container mx-0 px-6">
               <h2 className="text-3xl font-bold text-center mb-4">About 
                <span className="text-purple">Me</span>
               </h2>
               <p className="text-gray-400 text-center mx-w-2xl mx-auto mb-16" >Get to know more about my background and passion </p>
                
                 {/* yahn image + my journey hogi */}
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* ab yahn hum image add karen gy */}
                    <div className="md:w-1/2 rounded-2xl overflow-hidden">
                         <motion.img
                         initial = {{opacity:0 , y:50}}  
                         whileInView={{opacity:1 ,y:0}}
                         transition={{duration: 0.9, ease:'easeOut'}}
                         viewport={{once:false, amount:0.2}}
                         className="w-full h-full object-cover"
                         src={assets.profileImg} alt="Profile"/>
                    </div>

                    {/* yahn hum text content add karen gy */}
                   <motion.div
                     initial = {{opacity:0 , y:50}}  
                     whileInView={{opacity:1 ,y:0}}
                      transition={{duration: 0.9, ease:'easeOut'}}
                     viewport={{once:false, amount:0.2}}
                     className="md:w-1/2"
                     >
                        <div className="rounded-2xl p-8">
                            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
                            <p className="text-gray-300 mb-6">I'm a passionate Frontend Developer and a fresh graduate with a strong foundation in web development and software engineering. My journey began with the basics of HTML, CSS, and JavaScript, and has evolved into building responsive, interactive, and modern web applications using technologies like React.</p>
                            <p className="text-gray-300 mb-6"> I enjoy turning ideas into real-world digital experiences through clean and efficient code. I'm constantly learning new tools and improving my skills by working on practical projects and exploring modern development practices.</p>
                            <p className="text-gray-300 mb-6" > I am motivated to grow in a professional environment where I can contribute, learn, and build impactful web solutions while enhancing my creativity and technical expertise.</p>
                        
                          {/* cards add karun gi ab mein */}
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                 {
                                    // matlb aboutInfo array mein 3 items hein osko UI pr dekhna yahi loop chalana 
                                  aboutInfo.map((data, index) => {
                                  const Icon = data.icon; 
                                   return (
                                    <div
                                             key={index}
                                             className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                                              >
                                           <div className={`text-4xl mb-4 ${data.color}`}>
                                                  <Icon /> 
                                           </div>

                                         <h2 className="text-xl font-semibold mb-2">{data.title}</h2>
                                         <p className="text-gray-400">{data.description}</p>
                                     </div>
                                         );
                                      })
                                 }
                             </div>
                            
                        </div>
                    
                   </motion.div>

                </div>
            
            </div>


        </motion.div>
    )
}
export default About;