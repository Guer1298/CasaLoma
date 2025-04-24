export default function Testimonios() {
  const testimonios = [
    {
      nombre: "Laura R.",
      texto: "Un lugar mágico. Atención 10/10 y desayuno con vista espectacular. Se siente como estar en casa, pero en un sueño colonial.",
    },
    {
      nombre: "Carlos M.",
      texto: "La mejor ubicación en Popayán. Perfecta para caminar, fotografiar, descansar. Volvería por el silencio, la historia y el trato humano.",
    },
    {
      nombre: "Andrea P.",
      texto: "Decoración hermosa, muy tranquilo. La experiencia fue tan personalizada que sentí que me estaban esperando solo a mí.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900 text-center">
      <div className="max-w-3xl mx-auto mb-14">
        <h2 className="text-4xl font-extrabold mb-4 tracking-tight leading-tight">
          Lo que dicen nuestros huéspedes
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Quienes nos visitan no solo recuerdan la comodidad, sino la calidez. Aquí algunas de sus palabras:
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {testimonios.map((testi, i) => (
          <div
            key={i}
            className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-left transition hover:shadow-xl"
          >
            <div className="absolute top-4 right-4 text-4xl text-gray-200 dark:text-gray-700">“</div>
            <p className="italic text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              {testi.texto}
            </p>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">— {testi.nombre}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
