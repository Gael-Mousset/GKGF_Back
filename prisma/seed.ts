import { createEdition } from './seed/edition';
import { createGames } from './seed/game';
import { createLocation } from './seed/location';
import { createPlateform } from './seed/plateform';
import { createSeries } from './seed/series';
import { createUser } from './seed/user';
import { prisma } from './seed/utiles';

async function main() {
  // await createUser(10);
  // await createPlateform();
  // await createSeries();
  // await createEdition();
  //await createLocation();
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
