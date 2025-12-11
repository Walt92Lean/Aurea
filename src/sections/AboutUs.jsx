// src/sections/AboutUs.jsx
import { motion } from "framer-motion";
import aboutImage from "../assets/about/About.jpg";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-aurea-secondary text-aurea-primary py-20 px-6 md:px-20"
      aria-labelledby="about-title"
    >
      <motion.h2
        id="about-title"
        className="text-4xl md:text-5xl font-serif text-center text-aurea-accent mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        ¿Quiénes somos?
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg md:text-xl leading-relaxed font-sans">
            <strong className="brand-text text-aurea-accent">Áurea Marketing</strong> es una agencia creativa y estratégica.
            Diseñamos contenido, campañas y experiencias que hacen brillar tu marca, siempre alineadas a objetivos reales de negocio.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={aboutImage}
            alt="Equipo de Áurea trabajando en estrategia y diseño"
            className="w-full h-auto rounded-xl shadow-xl"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
