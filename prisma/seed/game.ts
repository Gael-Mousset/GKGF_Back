import {
  Game,
  Pegi,
  Edition_Game,
  Region,
  Language,
  All_Support,
  Etat,
  User,
  Plateform,
} from '@prisma/client';
import { generateSerialPS2, prisma } from './utiles';
import { fakerFR as faker } from '@faker-js/faker';
import {
  getRandomNumber,
  getRandomBoolean,
  getRendomEnumValue,
  generateSerialSwitch,
} from './utiles';

export const createGames = async (number: number): Promise<Game[]> => {
  const games: Game[] = [];
  const user = await prisma.user.findUnique({
    where: { email: 'user@gmail.com' },
  });
  if (!user) {
    throw new Error('User not found');
  }

  for (let i = 0; i < number; i++) {
    games.push(
      await prisma.game.create({
        data: {
          title: faker.commerce.productName(),
          plateforme: { connect: { name: 'Nintendo Switch' } },
          serial_number: generateSerialSwitch(),
          excusivity: getRandomBoolean(),
          pegi: 'Pegi3' as Pegi,
          edition: getRendomEnumValue(Edition_Game),
          region: getRendomEnumValue(Region),
          language: getRendomEnumValue(Language),
          inBox: getRandomBoolean(),
          manual: getRandomBoolean(),
          all_support: getRendomEnumValue(All_Support),
          etat: getRendomEnumValue(Etat),
          collection: getRandomBoolean(),
          throws: getRandomBoolean(),
          description: faker.lorem.sentence(),
          user: { connect: { id: user.id } },
        },
      }),
    );
  }

  for (let i = 0; i < number; i++) {
    games.push(
      await prisma.game.create({
        data: {
          title: faker.commerce.productName(),
          plateforme: { connect: { name: 'PS2' } },
          serial_number: generateSerialPS2(),
          excusivity: getRandomBoolean(),
          pegi: 'Pegi3' as Pegi,
          edition: getRendomEnumValue(Edition_Game),
          region: getRendomEnumValue(Region),
          language: getRendomEnumValue(Language),
          inBox: getRandomBoolean(),
          manual: getRandomBoolean(),
          all_support: getRendomEnumValue(All_Support),
          etat: getRendomEnumValue(Etat),
          collection: getRandomBoolean(),
          throws: getRandomBoolean(),
          description: faker.lorem.sentence(),
          user: { connect: { id: user.id } },
        },
      }),
    );
  }

  return games;
};
