// src/components/Gallery.jsx
import React from "react";
import { motion } from "framer-motion";

// Ejemplo de proyectos
const projects = [
  { title: "Rediseño Web para Café Nube", image: "src/assets//projects/Hero1.jpg" },
  { title: "Campaña Digital EcoModa", image: "src/assets/projects/Hero2.jpg" },
  { title: "Desarrollo eCommerce - TechNova", image: "src/assets/projects/Hero3.jpg" },
];

const Gallery = () => {
  return (
    <section id="galeria" className="bg-[#1d1d1b] text-[#e7decd] py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-[#ac8e60] mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Galería de Proyectos
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#121212] p-6 rounded-2xl shadow-lg border border-[#ac8e60] hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-[#e7decd]">{project.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
