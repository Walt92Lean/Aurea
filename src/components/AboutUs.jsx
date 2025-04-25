// src/components/AboutUs.jsx
import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/About.jpg"; // Ruta de la imagen

const AboutUs = () => {
  return (
    <section id="aboutus" className="bg-[#e7decd] text-[#1d1d1b] py-20 px-6 md:px-20">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-[#ac8e60] mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        ¿Quiénes Somos?
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg md:text-xl mb-6">
            Áurea Marketing es una agencia de marketing digital enfocada en crear estrategias personalizadas para hacer crecer tu marca. Nuestro equipo se dedica a entender tus objetivos y ofrecer soluciones innovadoras para cada desafío.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={aboutImage}
            alt="Sobre nosotros"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
