// src/lib/db.ts

import { PrismaClient } from '@prisma/client';

/**
 * Evita crear múltiples instancias de Prisma en desarrollo,
 * lo cual puede saturar la conexión con la base de datos.
 * En producción se crea una única instancia global.
 */

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['error', 'warn'], // puedes añadir 'query' para debug avanzado
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
