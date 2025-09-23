import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameController } from './game.controller';
import { PrismaModule } from 'prisma/services/prisma.module';
import { PlateformModule } from 'src/plateform/plateform.module';

@Module({
  imports: [PrismaModule, PlateformModule],
  controllers: [GameController],
  providers: [GameService],
})
export class GameModule {}
