export default function PropuestaValor() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-black text-center">
      <div className="max-w-4xl mx-auto mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
          ¿Por qué elegir Casa Loma?
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
          Más que un hospedaje, Casa Loma es una experiencia que honra la historia de Popayán, celebra sus raíces y transforma tu visita en algo inolvidable.
        </p>
      </div>

      <div className="grid gap-14 md:grid-cols-3 max-w-6xl mx-auto">
        {/* Arquitectura */}
        <div className="flex flex-col items-center text-left">
          <img
            src="/imagenes/reloj.png"
            alt="Arquitectura colonial de Popayán"
            className="w-full h-48 object-cover rounded-xl shadow-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2 text-center">Arquitectura con historia</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed text-center">
            Cada arco y tejado guarda relatos centenarios. Nuestra casa colonial restaurada es un puente entre la herencia de Popayán y el diseño boutique contemporáneo.
          </p>
        </div>

        {/* Experiencias */}
<div className="flex flex-col items-center text-center">
  <div className="w-full h-64 overflow-hidden rounded-xl shadow-md mb-4">
    <img
      src="/imagenes/cafe.png"
      alt="Cata de café en Casa Loma"
      className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out hover:scale-105"
    />
  </div>
  <h3 className="text-xl font-semibold mb-2">Experiencias que transforman</h3>
  <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
    Desde catas de café hasta caminatas por el centro histórico, te invitamos a vivir Popayán con los sentidos y el alma. Aquí no solo visitas: conectas.
  </p>
</div>


        {/* Atención */}
        <div className="flex flex-col items-center text-left">
          <img
            src="/imagenes/equipo.png"
            alt="Atención personalizada en Casa Loma"
            className="w-full h-48 object-cover rounded-xl shadow-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2 text-center">Atención con alma</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed text-center">
            Nuestro equipo te acompaña como si fueras parte de la familia. Cada detalle está pensado con calidez, empatía y amor por el oficio de recibir.
          </p>
        </div>
      </div>
    </section>
  );
}
