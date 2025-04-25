"use client";

import Link from "next/link";

export default function Confirmacion() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black px-6">
      <div className="max-w-xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          ¡Tu reserva fue confirmada!
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
          Gracias por elegir Casa Loma. Hemos recibido tu solicitud y te enviaremos la confirmación por correo electrónico.
        </p>
        <Link
          href="/"
          className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-gray-700 transition"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
