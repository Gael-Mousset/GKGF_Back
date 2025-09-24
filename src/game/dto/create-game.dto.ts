import {
  Region,
  Language,
  Etat,
  Format,
  Audience_Rating,
  launch_status,
  Objectif,
} from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateResourceDto } from 'src/resource/dto/create-resource.dto';
import { CreateVenteDto } from 'src/vente/dto/create-vente.dto';

export class CreateGameDto {
  //Infos
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  idSeries: number;

  @IsNotEmpty()
  @IsString()
  sortTitle: string;

  //info boite
  @IsNotEmpty()
  plateformeId?: number;

  @IsNotEmpty()
  @IsString()
  serial_number: string;

  @IsNotEmpty()
  @IsString()
  barcode: string;

  @IsNotEmpty()
  @IsEnum(Format)
  format: Format;

  // info version

  @IsNotEmpty()
  idEdition: number;

  @IsNotEmpty()
  @IsEnum(Region)
  region: Region;

  @IsNotEmpty()
  @IsEnum(Audience_Rating)
  audience: Audience_Rating;

  @IsNotEmpty()
  @IsEnum(Language)
  language: Language;

  @IsNotEmpty()
  @IsBoolean()
  excusivity: boolean;

  // info contenu
  @IsNotEmpty()
  @IsBoolean()
  jeux: boolean;

  @IsNotEmpty()
  @IsBoolean()
  boite: boolean;

  @IsNotEmpty()
  @IsBoolean()
  manuel: boolean;

  @IsNotEmpty()
  @IsEnum(Etat)
  etatJeu: Etat;

  @IsNotEmpty()
  @IsEnum(launch_status)
  launch: launch_status;

  @IsNotEmpty()
  @IsEnum(Etat)
  etatbox: Etat;

  @IsNotEmpty()
  @IsEnum(Etat)
  etatManuel: Etat;

  // objectif de la version

  @IsNotEmpty()
  @IsEnum(Objectif)
  objectif: Objectif;

  @IsNotEmpty()
  idLocation: number;

  // images
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateResourceDto)
  resources?: CreateResourceDto[];

  // description
  @IsNotEmpty()
  @IsString()
  description: string;

  // links externes

  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  annonceId?: number;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CreateVenteDto)
  vente?: CreateVenteDto;
}
