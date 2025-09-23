import { createGames } from './seed/game';
import { createPlateform } from './seed/plateform';
import { createUser } from './seed/user';
import { prisma } from './seed/utiles';

async function main() {
  await createUser(10);
  await createPlateform();
  await createGames(5);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
