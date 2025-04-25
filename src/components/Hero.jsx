// src/components/Hero.jsx
import React from "react";
import { motion } from 'framer-motion';
import heroImage from "../assets/Hero1.jpg"; // Ruta de la imagen de fondo

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-[#e7decd] leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ¡Áurea Marketing!
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl text-[#ac8e60]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Estrategias digitales con elegancia y precisión
        </motion.p>
        <motion.button
          className="mt-6 px-8 py-3 bg-[#ac8e60] text-white rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Conócenos
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
