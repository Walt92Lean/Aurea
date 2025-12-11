import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-[#e7decd] py-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.p
          className="text-lg mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          © 2025 Áurea Marketing. Todos los derechos reservados.
        </motion.p>
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <a href="#" className="text-[#ac8e60]">
            <FaInstagram size={30} />
          </a>
          <a href="#" className="text-[#ac8e60]">
            <FaFacebookF size={30} />
          </a>
          <a href="#" className="text-[#ac8e60]">
            <FaTwitter size={30} />
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
