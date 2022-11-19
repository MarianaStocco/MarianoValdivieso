import React from 'react'
import Hero from './Hero';
import Header from './Header';
import About from './About';
import GallerySection from './GallerySection';
import Skills from './Skills';
import Interview from './Interview';
import Contact from './Contact';
import Footer from './Footer';
import Copyright from './Copyright';


export default function Home  ()  {
  return (
    <>
    <Header />
    <Hero />
    <About />
    <GallerySection />
    <Interview />
    <Skills />
    <Contact />
    <Footer />
    <Copyright />
    </>
  )
}
