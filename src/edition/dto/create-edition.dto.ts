import { IsString } from 'class-validator';

export class CreateEditionDto {
  @IsString()
  name: string;
}
