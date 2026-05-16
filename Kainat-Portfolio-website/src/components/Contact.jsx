import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-dark-100"
    >
      <div className="max-w-5xl mx-auto px-6">
        
        <h2 className="text-3xl font-bold text-center mb-4">
          Get In <span className="text-purple">Touch</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          I'm open to internships and collaboration opportunities. Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* FORM */}
          <form className="space-y-6">
            
            <div>
              <label className="block text-gray-300 mb-2">Your Name</label>
              <input
                type="text"
                className="w-full bg-dark-300 border border-dark-300 rounded-lg px-4 py-3 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Email Address</label>
              <input
                type="email"
                className="w-full bg-dark-300 border border-dark-300 rounded-lg px-4 py-3 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Your Message</label>
              <textarea
                className="w-full h-40 bg-dark-300 border border-dark-300 rounded-lg px-4 py-3 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300"
            >
              Send Message
            </button>

          </form>

          {/* CONTACT INFO */}
          <div className="space-y-8">
            
            <div className=" flex items-start">
                <div className="text-purple text-2xl mr-4"> 
                    <FaMapMarkedAlt/>
                </div>
                <div>
                    <h3 className=" text-lg font-semibold mv-2">Location</h3>
                    <p className="text-gray-400">Karachi, Pakistan</p>
                </div>
            </div>

             <div className=" flex items-start">
                <div className="text-purple text-2xl mr-4"> 
                    <FaEnvelope/>
                </div>
                <div>
                    <h3 className=" text-lg font-semibold mv-2">Email</h3>
                    <p className="text-gray-400">shafiqkainat8@gmail.com</p>
                </div>
            </div>
            
            <div className=" flex items-start">
                <div className="text-purple text-2xl mr-4"> 
                    <FaPhone/>
                </div>
                <div>
                    <h3 className=" text-lg font-semibold mv-2">Phone</h3>
                    <p className="text-gray-400">+92 330 206 2610</p>
                </div>
            </div>
            


            <div className="pt-4">
              <h3 className="font-semibold text-lg">Follow Me</h3>
              <div className="flex space x-4">
                <a 
                href="https://github.com/Kainat-Shafiq" 
                className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300"
                >
                   <FaGithub/> 
                </a>
                 <a 
                href="https://www.linkedin.com/in/kainat-shafiq-859854261/" 
                className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-orange-400 hover:bg-orange-400 hover:text-white transition duration-300"
                >
                   <FaLinkedinIn/> 
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default Contact;