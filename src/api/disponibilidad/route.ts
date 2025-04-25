import { NextResponse } from 'next/server';
import { verificarDisponibilidad } from '@/services/booking';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const entrada = new Date(searchParams.get('entrada')!);
  const salida = new Date(searchParams.get('salida')!);
  const disponibles = await verificarDisponibilidad(entrada, salida);
  return NextResponse.json(disponibles);
}