import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module';
import { UserModule } from './user/user.module';
import { PlateformModule } from './plateform/plateform.module';

@Module({
  imports: [GameModule, UserModule, PlateformModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
