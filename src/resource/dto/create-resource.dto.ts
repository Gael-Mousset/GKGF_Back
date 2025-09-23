import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateResourceDto {
  @IsNotEmpty()
  @IsString()
  url: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  mimeType: string;
}
