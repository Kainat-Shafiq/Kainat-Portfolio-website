import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Learning from "../components/Learning";

const  Home=() => {

return(
    <div>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Learning/>
        <Contact/>
    </div>
)
}
export default Home;