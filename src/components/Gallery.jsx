// src/components/Gallery.jsx
import React from "react";
import { motion } from "framer-motion";

import proyect1 from "../assets/projects/Cafe.jpg";
import proyect2 from "../assets/projects/ecomoda.jpg";
import proyect3 from "../assets/projects/technova.jpg";

const projects = [
  { title: "Rediseño Web para Café Nube", image: proyect1 },
  { title: "Campaña Digital EcoModa", image: proyect2 },
  { title: "Desarrollo eCommerce - TechNova", image: proyect3 },
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
              className="bg-[#121212] p-6 rounded-2xl border border-[#ac8e60] shadow-md hover:scale-[1.02] transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-[#e7decd] text-center">{project.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
