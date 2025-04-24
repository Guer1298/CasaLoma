interface Plato {
  nombre: string;
  descripcion: string;
  precio: string;
}

const entradas: Plato[] = [
  { nombre: "Ceviche de camarón", descripcion: "Con maracuyá y cebolla morada", precio: "$28.000" },
  { nombre: "Arepa de choclo", descripcion: "Con queso campesino derretido", precio: "$14.000" },
];

const fuertes: Plato[] = [
  { nombre: "Filete de res en salsa de café", descripcion: "Acompañado con puré de papa nativa", precio: "$45.000" },
  { nombre: "Pechuga rellena de espinaca y queso", descripcion: "Con vegetales al vapor", precio: "$38.000" },
];

const postres: Plato[] = [
  { nombre: "Tres leches artesanal", descripcion: "Con toque de cardamomo", precio: "$15.000" },
  { nombre: "Helado de coco casero", descripcion: "Servido con chips de cacao", precio: "$12.000" },
];

export default function Terraza() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-16 xl:px-24 bg-white dark:bg-black text-gray-800 dark:text-white min-h-screen">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-4">Terraza Gastro</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Descubre una experiencia culinaria en nuestra terraza con platos artesanales inspirados en sabores locales.
        </p>
        <a
          href="/contacto"
          className="inline-block mt-6 px-6 py-3 bg-gray-900 text-white rounded-md text-sm font-medium hover:bg-gray-700 transition"
        >
          Reservar mesa
        </a>
      </div>

      {/* Sección reutilizable */}
      <MenuSection titulo="Entradas" platos={entradas} />
      <MenuSection titulo="Platos Fuertes" platos={fuertes} />
      <MenuSection titulo="Postres" platos={postres} />
    </section>
  );
}

function MenuSection({ titulo, platos }: { titulo: string; platos: Plato[] }) {
  return (
    <div className="mb-14">
      <h3 className="text-2xl font-bold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">{titulo}</h3>
      <div className="grid gap-8 md:grid-cols-2">
        {platos.map((plato, i) => (
          <div
            key={i}
            className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="flex justify-between items-center mb-1">
              <h4 className="text-lg font-semibold">{plato.nombre}</h4>
              <span className="font-medium text-gray-900 dark:text-gray-100">{plato.precio}</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">{plato.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
