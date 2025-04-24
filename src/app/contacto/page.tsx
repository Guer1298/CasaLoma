export default function Contacto() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-20 xl:px-24 bg-white dark:bg-black min-h-screen text-gray-800 dark:text-white">
      <div className="max-w-5xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-snug">
          Conecta con nosotros
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Ya sea para reservar, planear un evento o vivir una experiencia única, estamos aquí para ayudarte.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Información de contacto */}
        <div className="space-y-6 text-base text-gray-700 dark:text-gray-300">
          <div>
            <h3 className="text-xl font-semibold mb-1">📍 Dirección</h3>
            <p>Calle 5 No. 8-45, Centro Histórico, Popayán - Colombia</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1">📞 Teléfono</h3>
            <p>+57 312 345 6789</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1">✉️ Correo</h3>
            <p>contacto@casaloma.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1">🕒 Horarios</h3>
            <p>Lunes a Domingo: 7:00 am – 10:00 pm</p>
          </div>
          <div className="pt-4">
            <iframe
              title="Mapa Casa Loma"
              src="https://maps.google.com/maps?q=Popayán%20Centro&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="250"
              className="rounded-md shadow"
              loading="lazy"
            />
          </div>
        </div>

        {/* Formulario de contacto */}
        <form
          action="https://formspree.io/f/your_form_id" // <-- Cambiar al integrar con Formspree, EmailJS, etc.
          method="POST"
          className="space-y-6 bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md"
        >
          <div>
            <label htmlFor="nombre" className="block mb-1 font-medium">
              Nombre completo
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="mensaje" className="block mb-1 font-medium">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={5}
              required
              className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 px-6 rounded-md hover:bg-gray-700 transition text-sm font-medium"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}

