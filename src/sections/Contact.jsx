// src/sections/Contact.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeoypkrd"; // ⬅️ Pega tu endpoint real

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", _gotcha: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) =>
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData._gotcha) return; // honeypot: si lo llenó un bot, no enviamos
    try {
      setStatus("sending");
      setErrorMsg("");

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "", _gotcha: "" });
      } else {
        setStatus("error");
        setErrorMsg(data?.errors?.[0]?.message || "No se pudo enviar el mensaje.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Ocurrió un error de red. Probá nuevamente.");
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-aurea-secondary text-aurea-primary py-20 px-6 md:px-20"
      aria-labelledby="contact-title"
    >
      <motion.h2
        id="contact-title"
        className="text-4xl md:text-5xl font-serif text-center text-aurea-accent mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contáctanos
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto space-y-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        noValidate
      >
        {/* Honeypot (anti-spam) */}
        <input
          type="text"
          name="_gotcha"
          value={formData._gotcha}
          onChange={handleChange}
          className="hidden"
          tabIndex="-1"
          autoComplete="off"
          aria-hidden="true"
        />

        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-2">
            Nombre
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            required
            className="w-full px-4 py-2 rounded-md bg-aurea-white/90 text-aurea-primary
                       border border-aurea-primary/30 focus:outline-none focus:ring-2 focus:ring-aurea-accent"
            placeholder="Tu nombre"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            Correo electrónico
          </label>
          <input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            required
            className="w-full px-4 py-2 rounded-md bg-aurea-white/90 text-aurea-primary
                       border border-aurea-primary/30 focus:outline-none focus:ring-2 focus:ring-aurea-accent"
            placeholder="tuemail@ejemplo.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold mb-2">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
            className="w-full px-4 py-2 rounded-md bg-aurea-white/90 text-aurea-primary
                       border border-aurea-primary/30 focus:outline-none focus:ring-2 focus:ring-aurea-accent"
            placeholder="Contanos cómo podemos ayudarte..."
          />
        </div>

        {/* Estado / feedback */}
        {status === "success" && (
          <p className="text-green-700 text-sm text-center">
            ¡Gracias! Tu mensaje fue enviado.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-700 text-sm text-center">
            {errorMsg}
          </p>
        )}

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Enviando..." : "Enviar"}
          </Button>
          <Button
            as="a"
            href="https://wa.me/595994630777"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
          >
            Escribir por WhatsApp
          </Button>
        </div>
      </motion.form>
    </section>
  );
}
