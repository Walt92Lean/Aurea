import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#hero");
  const toggleMenu = () => setIsOpen((v) => !v);

const links = [
  { label: "Inicio", to: "#hero" },
  { label: "Servicios", to: "#services" },
  { label: "Galería", to: "#gallery" },
  { label: "Testimonios", to: "#testimonials" },
  { label: "Nosotras", to: "#about" },
  { label: "Contacto", to: "#contact" },
];


  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.to))
      .filter(Boolean);

    const obs = new IntersectionObserver(
      (entries) => {
        // Tomamos la sección más visible
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(`#${visible.target.id}`);
      },
      {
        root: null,
        rootMargin: "0px 0px -60% 0px", // activa un poco antes
        threshold: [0.2, 0.5, 0.8],
      }
    );

    sections.forEach((sec) => obs.observe(sec));
    return () => obs.disconnect();
  }, []);

  const linkCls = (to) =>
    `text-aurea-secondary hover:text-aurea-accent transition no-underline focus:outline-none focus:ring-2 focus:ring-aurea-accent rounded-sm ${
      active === to ? "text-aurea-accent" : ""
    }`;

  return (
    <nav className="fixed w-full bg-aurea-primary text-aurea-white z-50 shadow-md" role="navigation" aria-label="Principal">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#hero" className="font-branding text-xl text-aurea-accent no-underline">
          Áurea
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ label, to }) => (
            <li key={to}>
              <a href={to} className={linkCls(to)}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-1 focus:outline-none focus:ring-2 focus:ring-aurea-accent rounded-sm"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Abrir menú"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile */}
      {isOpen && (
        <motion.div
          id="mobile-menu"
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          className="md:hidden bg-aurea-primary px-4 pb-4"
        >
          <ul className="flex flex-col items-center gap-2">
            {links.map(({ label, to }) => (
              <li key={to} className="w-full text-center">
                <a
                  href={to}
                  onClick={() => setIsOpen(false)}
                  className={linkCls(to) + " block py-2 text-lg"}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
}
