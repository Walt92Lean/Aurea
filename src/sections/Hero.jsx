import Button from "../components/ui/Button";

export default function Hero() {
  return (
    <section id="hero" className="scroll-mt-24 text-center py-24 space-y-8">
      <p className="uppercase tracking-widest text-aurea-accent text-sm font-branding">
        Agencia creativa y estratégica
      </p>

      <h1 className="font-serif text-4xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight">
        En <span className="text-aurea-accent">Áurea</span> hacemos que tu marca
        brille con contenido, estrategia y diseño.
      </h1>

      <p className="text-aurea-secondary max-w-xl mx-auto text-base md:text-lg">
        Acompañamos a emprendedores y empresas a potenciar su comunicación y
        conectar con su audiencia ideal.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Button as="a" href="https://wa.me/595994630777" target="_blank" aria-label="Agendar reunión por WhatsApp">
          Agendar reunión
        </Button>
        <Button as="a" href="#services" variant="outline">
          Ver servicios
        </Button>
      </div>
    </section>
  );
}
