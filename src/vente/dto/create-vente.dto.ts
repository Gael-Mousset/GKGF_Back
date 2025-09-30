import { salePlaces } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsDate, IsEnum, IsNumber, IsString, Min } from 'class-validator';

export class CreateVenteDto {
  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  prix_achat: number;

  @Type(() => Date)
  @IsDate()
  date_achat: Date;

  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  prix_estime: number;

  @IsString()
  nameSalePlace: string;

  @IsEnum(salePlaces)
  salePlace: salePlaces;
}
