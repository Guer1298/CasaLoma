export default function Ubicacion() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-black text-center">
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-extrabold mb-4 tracking-tight leading-tight">¿Dónde estamos?</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Nos ubicamos en el corazón de Popayán, entre calles empedradas, plazas coloniales y el aroma del café local. Casa Loma es el punto de partida perfecto para vivir la ciudad desde su alma.
        </p>
      </div>

      <div className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
        <iframe
          src="https://maps.google.com/maps?q=Popayán&t=&z=15&ie=UTF8&iwloc=&output=embed"
          title="Mapa de ubicación Casa Loma"
          loading="lazy"
          className="w-full h-[400px] border-0"
        />
      </div>

      <div className="mt-8 text-gray-600 dark:text-gray-400 text-sm">
        📍 Dirección exacta: Calle 5 No. 8-45, Centro Histórico, Popayán – Cauca, Colombia
      </div>
    </section>
  );
}
