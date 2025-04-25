import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-[#1d1d1b] z-50 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-[#e7decd] text-2xl font-bold">Áurea</h1>
        <div className="flex space-x-6 text-[#e7decd]">
          <Link to="inicio" smooth={true} duration={500} className="cursor-pointer hover:text-[#ac8e60]">Inicio</Link>
          <Link to="servicios" smooth={true} duration={500} className="cursor-pointer hover:text-[#ac8e60]">Servicios</Link>
          <Link to="proyectos" smooth={true} duration={500} className="cursor-pointer hover:text-[#ac8e60]">Proyectos</Link>
          <Link to="testimonios" smooth={true} duration={500} className="cursor-pointer hover:text-[#ac8e60]">Testimonios</Link>
          <Link to="contacto" smooth={true} duration={500} className="cursor-pointer hover:text-[#ac8e60]">Contacto</Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
