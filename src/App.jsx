import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Gallery from "./sections/Gallery";
import Testimonials from "./sections/Testimonials";
import AboutUs from "./sections/AboutUs";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-16 md:py-20 space-y-20 md:space-y-32">
        <Hero />
        <Services />
        <Gallery />
        <Testimonials />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
