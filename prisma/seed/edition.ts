import { Editions } from '@prisma/client';
import { prisma } from './utiles';

export const createEdition = async (): Promise<void> => {
  const editions: Editions[] = [];

  editions.push(
    await prisma.editions.create({
      data: {
        name: 'Black Label',
      },
    }),
  );

  editions.push(
    await prisma.editions.create({
      data: {
        name: 'Platinum',
      },
    }),
  );

  editions.push(
    await prisma.editions.create({
      data: {
        name: 'Collector',
      },
    }),
  );

  editions.push(
    await prisma.editions.create({
      data: {
        name: 'Limited',
      },
    }),
  );
  editions.push(
    await prisma.editions.create({
      data: {
        name: 'Game of the Year',
      },
    }),
  );
};
