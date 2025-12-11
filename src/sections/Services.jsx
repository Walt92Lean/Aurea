import { motion } from "framer-motion";
import services from "../data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 text-center py-24 space-y-12"
      aria-labelledby="services-title"
    >
      <h2
        id="services-title"
        className="font-serif text-3xl md:text-4xl font-bold text-aurea-accent"
      >
        ¿Cómo hacemos brillar tu marca?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {services.map((service, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.05 }}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.98 }}
            className="
              group relative overflow-hidden
              rounded-2xl p-6
              bg-gradient-to-b from-aurea-secondary to-aurea-secondary/90
              text-aurea-primary
              ring-1 ring-black/5
              shadow-md hover:shadow-xl
              transition
            "
          >
            {/* Glow suave en hover */}
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -top-12 -right-10 h-48 w-48 rounded-full bg-aurea-accent/20 blur-3xl opacity-0 group-hover:opacity-100"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />

            <div
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="text-4xl mb-4 text-aurea-accent transition-transform duration-300 group-hover:-translate-y-1" aria-hidden="true">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2 font-sans">
                {service.title}
              </h3>

              <p className="text-sm font-sans text-aurea-primary/80">
                {service.description}
              </p>

              {/* subrayado que aparece al hover */}
              <span className="block h-0.5 w-0 bg-aurea-accent mx-auto mt-4 transition-all duration-300 group-hover:w-16" />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
