// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-white text-[#1d1d1b] py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-[#ac8e60] mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Sobre Nosotros
        </motion.h2>
        <motion.p
          className="text-lg leading-relaxed text-center text-[#1d1d1b]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          En Áurea nos especializamos en transformar ideas en experiencias digitales. Nuestro equipo de expertos en marketing y desarrollo trabaja de la mano contigo para construir una marca que no solo se vea bien, sino que también genere resultados reales.
        </motion.p>
      </div>
    </section>
  );
};

export default About;