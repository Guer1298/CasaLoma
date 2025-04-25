interface Habitacion {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
}

interface Props {
  habitaciones: Habitacion[];
  seleccionada: Habitacion | null;
  setSeleccionada: (hab: Habitacion) => void;
}

export default function SelectorHabitacion({
  habitaciones,
  seleccionada,
  setSeleccionada,
}: Props) {
  return (
    <div className="mb-8">
      <label className="block text-lg font-semibold mb-4 text-gray-800 dark:text-white">
        Selecciona una habitación
      </label>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {habitaciones.map((hab) => {
          const activa = seleccionada?.id === hab.id;
          return (
            <div
              key={hab.id}
              onClick={() => setSeleccionada(hab)}
              className={`rounded-xl border p-5 shadow-sm transition duration-300 cursor-pointer ${
                activa
                  ? "border-gray-900 dark:border-white bg-gray-100 dark:bg-gray-800"
                  : "border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
              } hover:shadow-lg`}
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                {hab.nombre}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                {hab.descripcion}
              </p>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                ${hab.precio.toLocaleString("es-CO")} COP / noche
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
