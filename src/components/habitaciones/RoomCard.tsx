// src/components/habitaciones/RoomCard.tsx
import Image from "next/image";

interface RoomCardProps {
  nombre: string;
  descripcion: string;
  imagen: string;
  precio: string;
}

export default function RoomCard({ nombre, descripcion, imagen, precio }: RoomCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
      <div className="relative w-full h-60">
        <Image
          src={imagen}
          alt={`Imagen de ${nombre}`}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>

      <div className="p-5 flex flex-col justify-between h-full flex-grow">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{nombre}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{descripcion}</p>
        </div>

        <div className="flex justify-between items-center mt-auto pt-2 border-t dark:border-gray-700">
          <span className="text-primary font-bold text-lg">{precio}</span>
          <a
            href="/contacto"
            className="bg-gray-800 text-white hover:bg-gray-700 px-4 py-2 rounded-md text-sm transition"
            aria-label={`Reservar habitación ${nombre}`}
          >
            Reservar
          </a>
        </div>
      </div>
    </div>
  );
}
