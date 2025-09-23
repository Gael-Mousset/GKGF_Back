import { Module } from '@nestjs/common';
import { PlateformService } from './plateform.service';
import { PlateformController } from './plateform.controller';

@Module({
  controllers: [PlateformController],
  providers: [PlateformService],
})
export class PlateformModule {}
