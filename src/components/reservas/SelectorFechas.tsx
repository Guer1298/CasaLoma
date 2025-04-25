"use client";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { es } from "date-fns/locale";

registerLocale("es", es);

interface Props {
  fechaEntrada: Date | null;
  fechaSalida: Date | null;
  setFechaEntrada: (date: Date) => void;
  setFechaSalida: (date: Date) => void;
}

export default function SelectorFechas({
  fechaEntrada,
  fechaSalida,
  setFechaEntrada,
  setFechaSalida,
}: Props) {
  return (
    <div className="mb-8">
      <label
        htmlFor="fechaEntrada"
        className="block text-lg font-semibold mb-4 text-gray-800 dark:text-white tracking-tight"
      >
        Selecciona tus fechas
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Fecha de entrada */}
        <div className="flex flex-col">
          <span className="text-sm font-medium mb-1 text-gray-600 dark:text-gray-400">Entrada</span>
          <DatePicker
            id="fechaEntrada"
            locale="es"
            selected={fechaEntrada}
            onChange={(date: Date | null) => {
              if (date) setFechaEntrada(date);
            }}
            selectsStart
            startDate={fechaEntrada}
            endDate={fechaSalida}
            minDate={new Date()}
            placeholderText="Selecciona la fecha de entrada"
            aria-label="Fecha de entrada"
            className="transition border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-sm dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
        </div>

        {/* Fecha de salida */}
        <div className="flex flex-col">
          <span className="text-sm font-medium mb-1 text-gray-600 dark:text-gray-400">Salida</span>
          <DatePicker
            id="fechaSalida"
            locale="es"
            selected={fechaSalida}
            onChange={(date: Date | null) => {
              if (date) setFechaSalida(date);
            }}
            selectsEnd
            startDate={fechaEntrada}
            endDate={fechaSalida}
            minDate={fechaEntrada ?? new Date()}
            placeholderText="Selecciona la fecha de salida"
            aria-label="Fecha de salida"
            className="transition border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-sm dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
        </div>
      </div>
    </div>
  );
}
