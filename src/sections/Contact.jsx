// src/components/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica de envío del formulario
    alert("Formulario enviado");
  };

  return (
    <section id="contacto" className="bg-[#121212] text-[#e7decd] py-20 px-6 md:px-20">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-[#ac8e60] mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contáctanos
      </motion.h2>
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-6">
          <label htmlFor="name" className="block text-lg font-semibold text-[#e7decd]">
            Nombre
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            id="name"
            className="w-full p-3 mt-2 bg-[#1d1d1b] text-[#e7decd] border border-[#ac8e60] rounded-md"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-lg font-semibold text-[#e7decd]">
            Correo Electrónico
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            id="email"
            className="w-full p-3 mt-2 bg-[#1d1d1b] text-[#e7decd] border border-[#ac8e60] rounded-md"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-lg font-semibold text-[#e7decd]">
            Mensaje
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            id="message"
            className="w-full p-3 mt-2 bg-[#1d1d1b] text-[#e7decd] border border-[#ac8e60] rounded-md"
            rows="5"
            required
          />
        </div>
        <div className="text-center">
          <motion.button
            type="submit"
            className="px-8 py-3 bg-[#ac8e60] text-white rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Enviar
          </motion.button>
        </div>
      </motion.form>
    </section>
  );
};

export default Contact;
