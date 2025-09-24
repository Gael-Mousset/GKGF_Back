import { Type } from 'class-transformer';
import { IsDate, IsNumber, Min } from 'class-validator';

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
}
