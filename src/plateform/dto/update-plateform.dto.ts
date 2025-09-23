import { PartialType } from '@nestjs/mapped-types';
import { CreatePlateformDto } from './create-plateform.dto';

export class UpdatePlateformDto extends PartialType(CreatePlateformDto) {}
