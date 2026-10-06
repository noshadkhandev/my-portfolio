import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import FloatingSocial from './components/FloatingSocial';
import BackToTop from './components/BackToTop';
import BackgroundBlobs from './components/BackgroundBlobs';

export default function App() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <BackgroundBlobs />
      <FloatingSocial />

      <Navbar />

      <main id="top">
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}