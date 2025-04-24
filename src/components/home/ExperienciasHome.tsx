export default function Experiencias() {
  const experiencias = [
    {
      titulo: "Cata de Café Caucano",
      descripcion: "Degusta los aromas del sur colombiano con caficultores locales en una experiencia sensorial inolvidable.",
      imagen: "/imagenes/cafe2.png",
    },
    {
      titulo: "Tour Colonial por Popayán",
      descripcion: "Camina por callejones históricos con guías que narran las leyendas de la Ciudad Blanca.",
      imagen: "/imagenes/calle.png",
    },
    {
      titulo: "Clase de Cocina Tradicional",
      descripcion: "Aprende recetas del Cauca con cocineras tradicionales en una clase llena de sabor y memoria.",
      imagen: "/imagenes/cocina.png",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white dark:bg-black text-center">
      <div className="max-w-3xl mx-auto mb-14">
        <h2 className="text-4xl font-extrabold mb-4 tracking-tight leading-tight">
          Vive Popayán desde adentro
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          En Casa Loma, cada experiencia es una puerta abierta a la identidad local. Cultura, historia, sabores y emociones en cada paso.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
        {experiencias.map((exp, index) => (
          <div
            key={index}
            className="group bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col"
          >
            <div className="relative w-full h-48 overflow-hidden">
              <img
                src={exp.imagen}
                alt={exp.titulo}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5 flex flex-col justify-between flex-grow text-left">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {exp.titulo}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{exp.descripcion}</p>
              </div>
              <a
                href="/contacto"
                className="mt-5 inline-block text-sm font-medium text-gray-900 dark:text-white underline hover:text-gray-600 dark:hover:text-gray-400 transition"
              >
                Quiero vivirlo →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
