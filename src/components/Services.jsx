// src/components/Servicios.jsx
import React from "react";
import { motion } from "framer-motion";

const servicios = [
  {
    title: "Branding y Diseño",
    description: "Creamos identidades visuales memorables y coherentes.",
  },
  {
    title: "Estrategia Digital",
    description: "Desarrollamos planes a medida para potenciar tu marca.",
  },
  {
    title: "Social Media",
    description: "Gestionamos y optimizamos tu presencia en redes sociales.",
  },
];

const Servicios = () => {
  return (
    <section id="servicios" className="bg-[#121212] text-[#e7decd] py-20 px-6 md:px-20">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-[#ac8e60] mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Servicios
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-10">
        {servicios.map((servicio, index) => (
          <motion.div
            key={index}
            className="bg-[#1d1d1b] p-6 rounded-2xl border border-[#ac8e60] shadow-md hover:scale-[1.02] transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-bold text-[#ac8e60] mb-4">{servicio.title}</h3>
            <p className="text-base">{servicio.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Servicios;