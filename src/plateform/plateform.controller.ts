import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlateformService } from './plateform.service';
import { CreatePlateformDto } from './dto/create-plateform.dto';
import { UpdatePlateformDto } from './dto/update-plateform.dto';

@Controller('plateform')
export class PlateformController {
  constructor(private readonly plateformService: PlateformService) {}

  @Post()
  create(@Body() createPlateformDto: CreatePlateformDto) {
    return this.plateformService.create(createPlateformDto);
  }

  @Get()
  findAll() {
    return this.plateformService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.plateformService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlateformDto: UpdatePlateformDto) {
    return this.plateformService.update(+id, updatePlateformDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.plateformService.remove(+id);
  }
}
