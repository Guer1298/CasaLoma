export default function HabitacionesSlider() {
  const habitaciones = [
    {
      titulo: "Suite Colonial",
      descripcion:
        "Amplia, elegante y con vista al centro histórico. Ideal para quienes buscan lujo y tradición en cada detalle.",
      imagen: "/imagenes/room3.png", // CORRECTA ruta desde /public
    },
    {
      titulo: "Deluxe Jardín Interior",
      descripcion:
        "Diseño boutique con acceso privado al jardín. Perfecta para leer, meditar o disfrutar de un café al amanecer.",
      imagen: "/imagenes/suitcolonial.png",
    },
    {
      titulo: "Habitación Estándar",
      descripcion:
        "Comodidad esencial con acabados cálidos y funcionales. Ideal para estancias breves con esencia colonial.",
      imagen: "/imagenes/room2.png",
    },
  ];

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 px-6 text-center">
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-4xl font-extrabold tracking-tight mb-4">Habitaciones destacadas</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Cada habitación en Casa Loma está diseñada para envolverte en una mezcla única de confort, historia y calidez.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {habitaciones.map((hab, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
          >
            <div className="h-56 w-full overflow-hidden">
              <img
                src={hab.imagen}
                alt={`Vista de ${hab.titulo}`}
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col justify-between flex-grow text-left">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {hab.titulo}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{hab.descripcion}</p>
              </div>
              <a
                href="/habitaciones"
                className="mt-4 inline-block px-5 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-700 transition self-start"
              >
                Ver más
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
