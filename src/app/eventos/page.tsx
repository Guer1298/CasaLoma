interface Evento {
    titulo: string;
    descripcion: string;
    imagen: string;
  }
  
  const eventos: Evento[] = [
    {
      titulo: "Bodas & Celebraciones",
      descripcion:
        "Celebra tu día especial en un entorno romántico, colonial y acogedor. Nuestro equipo se encarga de cada detalle para que vivas una experiencia única e inolvidable.",
      imagen: "/imagenes/celebracion.png",
    },
    {
      titulo: "Eventos Corporativos",
      descripcion:
        "Conferencias, lanzamientos y reuniones en un espacio que equilibra elegancia con tecnología. Ideal para empresas que desean causar impacto sin perder calidez.",
      imagen: "/imagenes/reuniones.png",
    },
    {
      titulo: "Cumpleaños & Privados",
      descripcion:
        "Desde cenas íntimas hasta celebraciones temáticas, en Casa Loma diseñamos el ambiente perfecto para tus momentos más memorables.",
      imagen: "/imagenes/cumpleanos.png",
    },
  ];
  
  export default function Eventos() {
    return (
      <section className="px-4 py-16 sm:px-6 lg:px-20 xl:px-24 bg-white dark:bg-black min-h-screen text-gray-800 dark:text-white">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Eventos en Casa Loma</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Creamos momentos que trascienden. Vive tu evento en un espacio con alma, donde el detalle importa y la experiencia se eleva.
          </p>
          <a
            href="/contacto"
            className="mt-6 inline-block px-6 py-3 bg-gray-900 text-white rounded-md text-sm font-medium hover:bg-gray-700 transition"
          >
            Agenda una asesoría personalizada
          </a>
        </div>
  
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {eventos.map((evento, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={evento.imagen}
                  alt={`Imagen de ${evento.titulo}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{evento.titulo}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{evento.descripcion}</p>
                </div>
                <a
                  href="/contacto"
                  className="mt-5 inline-block w-full text-center px-4 py-2 bg-primary text-white rounded-md text-sm font-semibold hover:bg-opacity-90 transition"
                >
                  Cotiza tu evento
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  