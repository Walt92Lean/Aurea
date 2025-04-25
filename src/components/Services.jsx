// src/components/Services.jsx
import React from "react";
import { motion } from "framer-motion";

const services = [
  { title: "Branding", description: "Diseñamos identidades visuales que comunican tu esencia." },
  { title: "Publicidad Digital", description: "Campañas con resultados reales en redes sociales." },
  { title: "Desarrollo Web", description: "Sitios web modernos, veloces y responsivos." },
];

const Services = () => {
  return (
    <section id="servicios" className="bg-[#1d1d1b] text-[#e7decd] py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-[#ac8e60] mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Nuestros Servicios
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#121212] p-6 rounded-2xl shadow-md border border-[#ac8e60] hover:scale-105 transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-[#e7decd]">{service.title}</h3>
              <p className="text-base leading-relaxed text-[#e7decd]">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
