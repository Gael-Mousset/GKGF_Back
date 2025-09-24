import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module';
import { UserModule } from './user/user.module';
import { PlateformModule } from './plateform/plateform.module';
import { SeriesModule } from './series/series.module';
import { LocationModule } from './location/location.module';
import { EditionModule } from './edition/edition.module';
import { ResourceModule } from './resource/resource.module';
import { VenteModule } from './vente/vente.module';

@Module({
  imports: [GameModule, UserModule, PlateformModule, SeriesModule, LocationModule, EditionModule, ResourceModule, VenteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
