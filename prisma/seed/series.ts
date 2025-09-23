import { Series } from '@prisma/client';
import { prisma } from './utiles';

export const createSeries = async (): Promise<void> => {
  const series: Series[] = [];

  series.push(
    await prisma.series.create({
      data: {
        name: 'Grand Theft Auto',
      },
    }),
  );
};
