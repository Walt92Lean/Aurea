// src/components/Testimonios.jsx
import React from "react";
import { motion } from "framer-motion";

// Asegúrate de importar las imágenes correctas
import testimonial1 from "../assets/Hero1.jpg";
import testimonial2 from "../assets/Hero2.jpg";

const testimonios = [
  {
    name: "Carlos Pérez",
    job: "CEO de Empresa X",
    quote: "El trabajo de Áurea Marketing transformó nuestra presencia digital de manera impresionante.",
    image: testimonial1,  // Aquí usamos la imagen importada
  },
  {
    name: "Ana Gómez",
    job: "Directora de Marketing",
    quote: "Gracias a sus estrategias, nuestras campañas han superado todas nuestras expectativas.",
    image: testimonial2,  // Aquí usamos la imagen importada
  },
];

const Testimonios = () => {
  return (
    <section id="testimonios" className="bg-[#121212] text-[#e7decd] py-20 px-6 md:px-20">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-[#ac8e60] mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Testimonios
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-10">
        {testimonios.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-[#1d1d1b] p-6 rounded-2xl shadow-md border border-[#ac8e60]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <p className="text-lg text-center italic mb-4">{testimonial.quote}</p>
            <p className="text-center font-semibold">{testimonial.name}</p>
            <p className="text-center text-sm">{testimonial.job}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonios;
