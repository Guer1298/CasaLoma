import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center bg-black"
      aria-label="Sección de introducción del sitio"
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imagenes/hero1.png" // Debe estar en /public/imagenes/
          alt="Vista colonial de la terraza de Casa Loma Hotel Boutique"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      </div>

      {/* Contenido superpuesto */}
      <div className="relative z-10 px-6 animate-fade-in-slow">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
          Vive Popayán con elegancia
        </h1>
        <p className="text-lg md:text-2xl text-white mb-8 max-w-2xl mx-auto drop-shadow-sm">
          Una experiencia boutique en el corazón de la Ciudad Blanca.
        </p>
        <a
          href="/reservas"
          className="inline-block bg-white text-gray-900 px-6 py-3 rounded-md font-semibold text-sm shadow-md hover:bg-gray-100 transition"
          aria-label="Reservar habitación en Casa Loma"
        >
          Reserva Ahora
        </a>
      </div>
    </section>
  );
}
