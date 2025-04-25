import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const iconVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    whileHover: { scale: 1.2 },
  };

  return (
    <footer className="bg-[#1d1d1b] text-[#e7decd] py-8">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h3 className="text-xl font-semibold mb-4">Síguenos en redes</h3>
        <div className="flex space-x-6 text-2xl">
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            whileHover="whileHover"
            transition={{ duration: 0.3 }}
            className="hover:text-[#ac8e60]"
          >
            <FaInstagram />
          </motion.a>

          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            whileHover="whileHover"
            transition={{ duration: 0.3, delay: 0.1 }}
            className="hover:text-[#ac8e60]"
          >
            <FaLinkedinIn />
          </motion.a>

          <motion.a
            href="https://wa.me/123456789"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            whileHover="whileHover"
            transition={{ duration: 0.3, delay: 0.2 }}
            className="hover:text-[#ac8e60]"
          >
            <FaWhatsapp />
          </motion.a>
        </div>

        <p className="mt-6 text-sm text-gray-400">© {new Date().getFullYear()} Áurea Marketing. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

