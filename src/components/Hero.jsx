// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/Hero1.jpg";

const Hero = () => {
  return (
    <section id="inicio"
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center px-4">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-[#e7decd] drop-shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ¡Áurea Marketing!
        </motion.h1>
        <motion.p
          className="mt-6 text-lg md:text-xl text-[#ac8e60] max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Estrategias digitales con elegancia y precisión
        </motion.p>
        <motion.button
          className="mt-8 px-8 py-3 bg-[#ac8e60] text-white text-lg rounded-lg shadow-md hover:bg-opacity-90 transition"
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
