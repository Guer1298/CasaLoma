interface Props {
    habitacion: any;
    fechaEntrada: Date;
    fechaSalida: Date;
  }
  
  export default function Resumen({ habitacion, fechaEntrada, fechaSalida }: Props) {
    const dias = Math.ceil(
      (fechaSalida.getTime() - fechaEntrada.getTime()) / (1000 * 60 * 60 * 24)
    );
    const total = dias * habitacion.precio;
  
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow mb-6">
        <h4 className="text-lg font-semibold mb-2">Resumen de tu reserva</h4>
        <p><strong>Habitación:</strong> {habitacion.nombre}</p>
        <p><strong>Fechas:</strong> {fechaEntrada.toLocaleDateString()} → {fechaSalida.toLocaleDateString()}</p>
        <p><strong>Noches:</strong> {dias}</p>
        <p><strong>Total estimado:</strong> ${total} COP</p>
      </div>
    );
  }