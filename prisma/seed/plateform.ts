import { Plateform } from '@prisma/client';
import { prisma } from './utiles';
import { fakerFR as faker } from '@faker-js/faker';
import { r } from '@faker-js/faker/dist/airline-CHFQMWko';

export const createPlateform = async (): Promise<Plateform[]> => {
  const plateforms: Plateform[] = [];

  plateforms.push(
    await prisma.plateform.create({
      data: {
        name: 'Wii',
        maker: 'Nintendo',
      },
    }),
  );
  plateforms.push(
    await prisma.plateform.create({
      data: {
        name: 'Nintendo Switch',
        maker: 'Nintendo',
      },
    }),
  );

  plateforms.push(
    await prisma.plateform.create({
      data: {
        name: 'PS1',
        maker: 'Sony',
      },
    }),
  );

  plateforms.push(
    await prisma.plateform.create({
      data: {
        name: 'PS2',
        maker: 'Sony',
      },
    }),
  );

  plateforms.push(
    await prisma.plateform.create({
      data: {
        name: 'PS3',
        maker: 'Sony',
      },
    }),
  );

  return plateforms;
};
