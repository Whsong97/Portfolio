import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import NavBar from  '../components/NavBar'

export default function Home() {

    return (
        <div>
            <NavBar />
            <Hero />
            <Projects />
            <About />
            <Contact />
        </div>
    )
}

