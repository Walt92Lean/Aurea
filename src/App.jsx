import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';  // Importamos el componente Contact
import AboutUs from './components/AboutUs';
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <AboutUs/>
      <Contact />
      <Testimonials />
      <Gallery />
      <Footer />
     
    </div>
  );
};

export default App;
