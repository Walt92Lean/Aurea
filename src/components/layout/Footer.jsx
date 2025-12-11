// src/components/layout/Footer.jsx
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-aurea-primary text-aurea-secondary py-8">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-4">
        <p className="font-sans">© {year} Áurea Marketing. Todos los derechos reservados.</p>

        <div className="flex justify-center gap-5">
          <a
            href="https://www.instagram.com/aureaimpulsa/" target="_blank"
            className="text-aurea-accent hover:opacity-80 transition"
            aria-label="Instagram de Áurea"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61580096033576" target="_blank"
            className="text-aurea-accent hover:opacity-80 transition"
            aria-label="Facebook de Áurea"
          >
            <FaFacebookF size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
