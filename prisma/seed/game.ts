import {
  Game,
  Region,
  Language,
  Etat,
  Format,
  Signal,
  Audience_Rating,
  launch_status,
  Objectif,
} from '@prisma/client';
import { generateSerialPS2, prisma } from './utiles';
import { fakerFR as faker } from '@faker-js/faker';
import { getRandomBoolean, getRendomEnumValue } from './utiles';
import { platform } from 'os';

export const createGames = async (number: number): Promise<Game[]> => {
  const games: Game[] = [];
  const user = await prisma.user.findUnique({
    where: { email: 'user@gmail.com' },
  });

  const plateforme = await prisma.plateform.findFirst({
    where: { name: 'PS2' },
  });

  const series = await prisma.series.findFirst({
    where: { name: 'Grand Theft Auto' },
  });
  const edition = await prisma.editions.findFirst({
    where: { name: 'Black Label' },
  });
  const location = await prisma.location.findFirst({
    where: { name: 'Chambre' },
  });

  if (!user) {
    throw new Error('User not found');
  }
  if (!plateforme) {
    throw new Error('Plateforme not found');
  }
  if (!series) {
    throw new Error('Series not found');
  }
  if (!edition) {
    throw new Error('Edition not found');
  }
  if (!location) {
    throw new Error('Location not found');
  }

  for (let i = 0; i < number; i++) {
    games.push(
      await prisma.game.create({
        data: {
          title: faker.commerce.productName(),
          series: { connect: { id: 1 } },
          sortTitle: faker.commerce.productName(),

          plateforme: { connect: { id: plateforme.id } },
          serial_number: generateSerialPS2(),
          barcode: generateSerialPS2(),
          format: getRendomEnumValue(Format),

          editions: { connect: { id: series.id } },
          region: getRendomEnumValue(Region),
          signal: getRendomEnumValue(Signal),
          audience: getRendomEnumValue(Audience_Rating),
          language: getRendomEnumValue(Language),
          excusivity: getRandomBoolean(),

          jeux: getRandomBoolean(),
          boite: getRandomBoolean(),
          manuel: getRandomBoolean(),
          etatJeu: getRendomEnumValue(Etat),
          launch: getRendomEnumValue(launch_status),
          etatbox: getRendomEnumValue(Etat),
          etatManuel: getRendomEnumValue(Etat),

          objectif: getRendomEnumValue(Objectif),
          location: { connect: { id: location.id } },

          description: faker.lorem.paragraph(),

          user: { connect: { id: user.id } },
        },
      }),
    );
  }

  return games;
};
