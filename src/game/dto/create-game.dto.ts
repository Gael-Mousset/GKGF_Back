import {
  Pegi,
  Edition_Game,
  Region,
  Language,
  All_Support,
  Etat,
} from '@prisma/client';
import { IsBoolean, IsEnum, IsInt, IsString } from 'class-validator';

export class CreateGameDto {
  @IsString()
  title: string;

  @IsString()
  plateformeName: string;

  @IsString()
  serial_number: string;

  @IsBoolean()
  excusivity: boolean;

  @IsEnum(Pegi)
  pegi: Pegi;

  @IsEnum(Edition_Game)
  edition: Edition_Game;

  @IsEnum(Region)
  region: Region;

  @IsEnum(Language)
  language: Language;

  @IsBoolean()
  inBox: boolean;

  @IsBoolean()
  manual: boolean;

  @IsEnum(All_Support)
  all_support: All_Support;

  @IsEnum(Etat)
  etat: Etat;

  @IsBoolean()
  collection: boolean;

  @IsBoolean()
  throws: boolean;

  @IsString()
  description: string;

  @IsInt()
  userId: number;
}
