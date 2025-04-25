// src/components/Testimonials.jsx
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Juan Pérez",
    image: "https://placeimg.com/200/200/people", // Asegúrate de tener imágenes reales
    quote: "¡Trabajar con Áurea fue una experiencia increíble! Mejoraron nuestra presencia digital.",
  },
  {
    name: "Ana Gómez",
    image: "https://placeimg.com/200/200/people",
    quote: "Excelente servicio, superaron nuestras expectativas en cada aspecto.",
  },
  {
    name: "Carlos López",
    image: "https://placeimg.com/200/200/people",
    quote: "Recomiendo a Áurea sin dudas, su trabajo es excepcional y muy profesional.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="bg-[#121212] text-[#e7decd] py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-[#ac8e60] mb-12 font-[Bricolage Grotesque]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Lo que dicen nuestros clientes
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-[#1d1d1b] p-6 rounded-2xl shadow-md border border-[#ac8e60] hover:scale-105 transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.img 
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-full w-32 h-32 object-cover mx-auto mb-4 max-w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#e7decd] font-[Pier Sans]">
                {testimonial.name}
              </h3>
              <p className="text-lg leading-relaxed text-[#e7decd] font-[Pier Sans]">
                "{testimonial.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
