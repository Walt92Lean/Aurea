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
        {services.map((service, index) => (
          <article
            key={index}
            className="bg-aurea-primary/90 text-aurea-secondary p-6 rounded-xl shadow-md border border-aurea-accent/60 hover:border-aurea-accent transition"
          >
            <div className="text-4xl mb-4" aria-hidden="true">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 font-sans">
              {service.title}
            </h3>
            <p className="text-sm text-aurea-secondary/90 font-sans">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
