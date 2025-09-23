import { prisma } from './utiles';
import { Location } from '@prisma/client';

export const createLocation = async (): Promise<void> => {
  const locations: Location[] = [];

  locations.push(
    await prisma.location.create({
      data: {
        name: 'Chambre',
      },
    }),
  );
};
