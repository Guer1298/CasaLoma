// src/app/habitaciones/page.tsx
import RoomCard from '@/components/habitaciones/RoomCard';

const habitaciones = [
  {
    nombre: 'Suite Colonial',
    descripcion: 'Espaciosa habitación con cama king, baño privado y balcón con vista al centro histórico.',
    imagen: '/imagenes/room3.png',
    precio: '$250.000/noche',
  },
  {
    nombre: 'Habitación Deluxe',
    descripcion: 'Ideal para parejas, con decoración colonial, escritorio y vista a los jardines interiores.',
    imagen: '/imagenes/suitcolonial.png',
    precio: '$180.000/noche',
  },
  {
    nombre: 'Estándar Doble',
    descripcion: 'Confort esencial para viajes de trabajo o estadías breves, equipada con escritorio y Wi-Fi rápido.',
    imagen: '/imagenes/room2.png',
    precio: '$130.000/noche',
  },
];

export default function Habitaciones() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-16 xl:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">
          Nuestras Habitaciones
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Comodidad y estilo en cada rincón. Elige la experiencia que deseas vivir en Casa Loma.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {habitaciones.map((hab, idx) => (
          <RoomCard key={idx} {...hab} />
        ))}
      </div>
    </section>
  );
}
