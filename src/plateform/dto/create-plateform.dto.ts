import { Maker } from '@prisma/client';
import { IsEnum, IsString } from 'class-validator';

export class CreatePlateformDto {
  @IsString()
  name: string;

  @IsEnum(Maker)
  maker: Maker;
}
