import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

export default function Home() {
  
  return (
    <div>
        <Hero />
        <About />
        <Contact />
        <Projects />
    </div>
  )
}

