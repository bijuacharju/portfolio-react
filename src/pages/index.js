import React, { useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Resume from "../components/Resume";
import Service from "../components/Service";
import Sidebar from "../components/Sidebar";
import Skills from "../components/Skills";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Hero />
            <About />
            <Resume />
            <Skills />
            <Service />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;
