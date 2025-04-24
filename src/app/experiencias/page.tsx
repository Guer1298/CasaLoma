interface Experiencia {
    titulo: string;
    descripcion: string;
    imagen: string;
  }
  
  const experiencias: Experiencia[] = [
    {
      titulo: "Tour Colonial por Popayán",
      descripcion:
        "Explora el corazón histórico de Popayán acompañado de guías expertos que revelan la historia oculta entre plazas, iglesias y callejones coloniales.",
      imagen: "/imagenes/calle.png",
    },
    {
      titulo: "Cata de Café Caucano",
      descripcion:
        "Conoce a los caficultores locales, aprende el arte de catar café y disfruta aromas y sabores únicos del sur colombiano.",
      imagen: "/imagenes/cafe2.png",
    },
    {
      titulo: "Cena con Maridaje en la Terraza",
      descripcion:
        "Disfruta de una velada bajo las estrellas con cocina de autor y vinos seleccionados en nuestra terraza con vista colonial.",
      imagen: "/imagenes/cena.png",
    },
    {
      titulo: "Clase de cocina tradicional",
      descripcion:
        "Aprende a preparar platos típicos del Cauca con cocineras tradicionales, en un espacio donde la gastronomía se convierte en memoria viva.",
      imagen: "/imagenes/cocina2.png",
    },
    {
      titulo: "Ruta del Quesillo & Mercados Locales",
      descripcion:
        "Un recorrido gastronómico por los sabores artesanales de la región. Visita mercados, conoce productores y degusta quesillos, dulces y conservas.",
      imagen: "/imagenes/mercado.png",
    },
  ];
  
  export default function Experiencias() {
    return (
      <section className="px-4 py-20 sm:px-6 lg:px-20 xl:px-24 bg-white dark:bg-black min-h-screen text-gray-800 dark:text-white">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
            Vive experiencias con sentido
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Más allá de una estadía, en Casa Loma te conectamos con la cultura viva, la gastronomía local y la historia profunda de Popayán.
          </p>
        </header>
  
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {experiencias.map((exp, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={exp.imagen}
                  alt={`Imagen de la experiencia ${exp.titulo}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">{exp.titulo}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{exp.descripcion}</p>
                </div>
                <a
                  href="/contacto"
                  className="mt-5 inline-block w-full text-center px-4 py-2 bg-gray-900 text-white rounded-md text-sm font-semibold hover:bg-gray-700 transition"
                >
                  Reserva esta experiencia
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  