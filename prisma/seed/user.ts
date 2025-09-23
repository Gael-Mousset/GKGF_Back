import { User } from '@prisma/client';
import { prisma } from './utiles';
import { fakerFR as faker } from '@faker-js/faker';

export const createUser = async (number: number): Promise<User[]> => {
  const users: User[] = [];

  const admin = await prisma.user.findUnique({
    where: { email: 'admin@gmail.com' },
  });

  if (!admin) {
    users.push(
      await prisma.user.create({
        data: {
          name: 'AdminUser 1',
          email: 'user@gmail.com',
          password: 'AdminUser1',
        },
      }),
    );
  }

  while (number) {
    users.push(
      await prisma.user.create({
        data: {
          name: faker.company.catchPhraseNoun(),
          email: faker.internet.email(),
          password: faker.internet.password(),
        },
      }),
    );
    number--;
  }
  return users;
};
