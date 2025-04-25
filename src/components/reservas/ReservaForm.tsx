"use client";
import { useState } from "react";
import SelectorFechas from "./SelectorFechas";
import SelectorHabitacion from "./SelectorHabitacion";
import Resumen from "./Resumen";
import Confirmacion from "./Confirmacion";

interface Habitacion {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
}

export default function ReservaForm() {
  const [fechaEntrada, setFechaEntrada] = useState<Date | null>(null);
  const [fechaSalida, setFechaSalida] = useState<Date | null>(null);
  const [habitaciones] = useState<Habitacion[]>([
    {
      id: 1,
      nombre: "Suite Colonial",
      descripcion: "Confort y elegancia en un espacio con vista al centro histórico.",
      precio: 250000,
    },
    {
      id: 2,
      nombre: "Deluxe Jardín",
      descripcion: "Tranquilidad absoluta con salida directa al jardín interior.",
      precio: 180000,
    },
  ]);
  const [seleccionada, setSeleccionada] = useState<Habitacion | null>(null);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [confirmado, setConfirmado] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!fechaEntrada || !fechaSalida || !seleccionada || !nombre || !email) return;
    setLoading(true);
    try {
      await fetch("/api/reservas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre,
          email,
          fechaEntrada,
          fechaSalida,
          habitacionId: seleccionada.id,
        }),
      });
      setConfirmado(true);
    } catch (error) {
      console.error("Error al enviar reserva:", error);
    } finally {
      setLoading(false);
    }
  };

  if (confirmado) return <Confirmacion />;

  return (
    <section className="max-w-3xl mx-auto px-6 py-10 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl">
      <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-8 leading-snug">
        Reserva tu experiencia en Casa Loma
      </h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="space-y-8"
      >
        <SelectorFechas
          fechaEntrada={fechaEntrada}
          fechaSalida={fechaSalida}
          setFechaEntrada={setFechaEntrada}
          setFechaSalida={setFechaSalida}
        />

        <SelectorHabitacion
          habitaciones={habitaciones}
          seleccionada={seleccionada}
          setSeleccionada={setSeleccionada}
        />

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            className="border border-gray-300 dark:border-gray-700 p-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-300 dark:border-gray-700 p-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
        </div>

        {fechaEntrada && fechaSalida && seleccionada && (
          <Resumen
            habitacion={seleccionada}
            fechaEntrada={fechaEntrada}
            fechaSalida={fechaSalida}
          />
        )}

        <button
          type="submit"
          disabled={loading}
          className={`w-full px-6 py-3 rounded-lg text-white font-medium text-lg transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gray-900 hover:bg-gray-700"
          }`}
        >
          {loading ? "Procesando..." : "Confirmar reserva"}
        </button>
      </form>
    </section>
  );
}
