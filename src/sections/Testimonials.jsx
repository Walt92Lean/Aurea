// src/sections/Testimonials.jsx
import { motion } from "framer-motion";
import testimonial1 from "../assets/testimonials/testimonio1.jpg";
import testimonial2 from "../assets/testimonials/testimonio2.jpg";

const testimonios = [
  {
    name: "Carlos Pérez",
    job: "CEO de Empresa X",
    quote:
      "El trabajo de Áurea Marketing transformó nuestra presencia digital de manera impresionante.",
    image: testimonial1,
  },
  {
    name: "Ana Gómez",
    job: "Directora de Marketing",
    quote:
      "Gracias a sus estrategias, nuestras campañas han superado todas nuestras expectativas.",
    image: testimonial2,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 bg-aurea-primary text-aurea-secondary py-20 px-6 md:px-20"
      aria-labelledby="testimonials-title"
    >
      <motion.h2
        id="testimonials-title"
        className="text-4xl md:text-5xl font-serif text-center text-aurea-accent mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Testimonios
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {testimonios.map((t, i) => (
          <motion.article
            key={i}
            className="bg-aurea-primary/90 p-6 rounded-2xl shadow-md border border-aurea-accent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <img
              src={t.image}
              alt={`Foto de ${t.name}`}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              loading="lazy"
            />
            <p className="text-lg text-center italic mb-4">“{t.quote}”</p>
            <p className="text-center font-semibold">{t.name}</p>
            <p className="text-center text-sm text-aurea-secondary/80">{t.job}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
