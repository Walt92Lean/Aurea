import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contacto" className="w-full min-h-screen bg-[#1d1d1b] text-[#e7decd] py-20 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Contáctanos</h2>
        <p className="text-[#ac8e60] mb-10 text-lg">¿Tienes un proyecto en mente? ¡Hablemos!</p>
      </motion.div>

      <motion.form
        className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <input
          type="text"
          placeholder="Nombre"
          className="bg-[#e7decd] text-[#1d1d1b] p-4 rounded-lg outline-none"
        />
        <input
          type="email"
          placeholder="Correo"
          className="bg-[#e7decd] text-[#1d1d1b] p-4 rounded-lg outline-none"
        />
        <textarea
          placeholder="Mensaje"
          rows="5"
          className="bg-[#e7decd] text-[#1d1d1b] p-4 rounded-lg outline-none md:col-span-2"
        ></textarea>
        <button
          type="submit"
          className="bg-[#ac8e60] text-white py-3 px-6 rounded-lg md:col-span-2 hover:bg-white hover:text-[#ac8e60] transition"
        >
          Enviar mensaje
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;
