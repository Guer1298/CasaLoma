// src/services/booking.ts

import prisma from '@/lib/db';

interface ReservaInput {
  nombre: string;
  email: string;
  fechaEntrada: string; // formato ISO string esperado desde el frontend
  fechaSalida: string;
  habitacionId: number;
}

/**
 * Crea una reserva en la base de datos.
 * @param data Información del cliente y la habitación a reservar.
 * @returns Objeto reserva creada.
 */
export async function crearReserva(data: ReservaInput) {
  const { nombre, email, fechaEntrada, fechaSalida, habitacionId } = data;

  // Validación de fechas
  const entrada = new Date(fechaEntrada);
  const salida = new Date(fechaSalida);
  if (entrada >= salida) throw new Error('La fecha de salida debe ser posterior a la de entrada');

  // Crear la reserva
  const reserva = await prisma.reserva.create({
    data: {
      clienteNombre: nombre,
      clienteEmail: email,
      fechaEntrada: entrada,
      fechaSalida: salida,
      habitacionId,
    }
  });

  return reserva;
}

/**
 * Verifica qué habitaciones están disponibles entre dos fechas.
 * Excluye cualquier habitación ya reservada en el intervalo solicitado.
 * @param fechaEntrada Fecha de check-in.
 * @param fechaSalida Fecha de check-out.
 * @returns Lista de habitaciones disponibles.
 */
export async function verificarDisponibilidad(fechaEntrada: Date, fechaSalida: Date) {
  if (fechaEntrada >= fechaSalida) throw new Error('Rango de fechas inválido');

  const disponibles = await prisma.habitacion.findMany({
    where: {
      reservas: {
        none: {
          OR: [
            {
              fechaEntrada: { lt: fechaSalida },
              fechaSalida: { gt: fechaEntrada }
            }
          ]
        }
      }
    }
  });

  return disponibles;
}
