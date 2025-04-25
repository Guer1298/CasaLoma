import { NextResponse } from 'next/server';
import { crearReserva } from '@/services/booking';

export async function POST(req: Request) {
  const data = await req.json();
  const reserva = await crearReserva(data);
  return NextResponse.json(reserva);
}