import ReservaForm from "@/components/reservas/ReservaForm";

export default function PageReservas() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-black py-20 px-6">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4 leading-tight">
          Reserva tu experiencia en Casa Loma
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Vive la calidez colonial en una casa boutique restaurada con alma. Reserva fácil, segura y sin intermediarios.
        </p>
      </div>

      <section className="relative z-10 mt-16 max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl ring-1 ring-gray-200 dark:ring-gray-700 p-6 sm:p-10">
        <div className="absolute -top-6 left-6 bg-white dark:bg-gray-800 px-4 py-1 rounded-md shadow-md border dark:border-gray-700">
          <span className="text-sm font-semibold text-gray-800 dark:text-white tracking-wide uppercase">Formulario de reserva</span>
        </div>
        <ReservaForm />
      </section>
    </main>
  );
}
