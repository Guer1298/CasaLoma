export default function Nosotros() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-20 xl:px-24 bg-white dark:bg-black text-gray-800 dark:text-white min-h-screen">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
          Nuestra historia es parte de tu experiencia
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
          En Casa Loma cultivamos una hospitalidad que emociona. No solo abrimos puertas, compartimos identidad, arte y alma caucana.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <img
          src="/imagenes/casaloma.png"
          alt="Fachada colonial restaurada del Hotel Casa Loma en Popayán"
          className="w-full h-80 object-cover rounded-xl shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-bold mb-4">Un legado que se vive</h2>
          <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
            Casa Loma nació como un homenaje a la arquitectura y cultura de Popayán. Desde su restauración, fusionamos historia con diseño contemporáneo para crear un refugio íntimo, elegante y lleno de intención.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-2xl font-bold mb-4">Nuestra filosofía</h2>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
            <li><strong>☕ Cercanía:</strong> cada huésped es tratado como un invitado en casa.</li>
            <li><strong>🌿 Sostenibilidad:</strong> nuestras decisiones priorizan el entorno y las comunidades locales.</li>
            <li><strong>🎨 Curaduría:</strong> cada experiencia, detalle arquitectónico o plato tiene propósito.</li>
            <li><strong>🗝️ Personalización:</strong> diseñamos estadías únicas, adaptadas a tus gustos e intenciones.</li>
          </ul>
        </div>
        <img
          src="/imagenes/equipo.png"
          alt="Equipo humano del Hotel Casa Loma brindando atención personalizada"
          className="w-full h-80 object-cover rounded-xl shadow-lg"
        />
      </div>

      <div className="text-center">
        <a
          href="/contacto"
          className="inline-block px-6 py-3 bg-gray-900 text-white rounded-md text-base font-medium hover:bg-gray-700 transition"
        >
          Agenda una visita o experiencia personalizada
        </a>
      </div>
    </section>
  );
}
