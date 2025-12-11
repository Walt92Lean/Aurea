// src/sections/Gallery.jsx
import { motion } from "framer-motion";
import proyect1 from "../assets/projects/Cafe.jpg";
import proyect2 from "../assets/projects/ecomoda.jpg";
import proyect3 from "../assets/projects/technova.jpg";

const projects = [
  { title: "Rediseño Web para Café Nube", image: proyect1 },
  { title: "Campaña Digital EcoModa", image: proyect2 },
  { title: "Desarrollo eCommerce - TechNova", image: proyect3 },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="scroll-mt-24 bg-aurea-primary text-aurea-secondary py-20 px-6 md:px-20"
      aria-labelledby="gallery-title"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          id="gallery-title"
          className="text-4xl md:text-5xl font-serif text-center text-aurea-accent mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Galería de Proyectos
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <motion.article
              key={i}
              className="bg-aurea-primary/90 p-6 rounded-2xl border border-aurea-accent/70 shadow-md hover:scale-[1.02] transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <img
                src={p.image}
                alt={`Proyecto: ${p.title}`}
                className="w-full h-60 object-cover rounded-xl mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold text-center font-sans">{p.title}</h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
