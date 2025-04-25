interface Habitacion {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
}

interface Props {
  habitacion: Habitacion;
  fechaEntrada: Date;
  fechaSalida: Date;
}

export default function Resumen({ habitacion, fechaEntrada, fechaSalida }: Props) {
  const dias = Math.ceil(
    (fechaSalida.getTime() - fechaEntrada.getTime()) / (1000 * 60 * 60 * 24)
  );
  const total = dias * habitacion.precio;

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border dark:border-gray-700 mb-6">
      <h4 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
        Resumen de tu reserva
      </h4>

      <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-base">
        <li><strong>🏨 Habitación:</strong> {habitacion.nombre}</li>
        <li><strong>📅 Fechas:</strong> {fechaEntrada.toLocaleDateString()} → {fechaSalida.toLocaleDateString()}</li>
        <li><strong>🛌 Noches:</strong> {dias}</li>
        <li><strong>💰 Total estimado:</strong> ${total.toLocaleString("es-CO")} COP</li>
      </ul>
    </div>
  );
}
