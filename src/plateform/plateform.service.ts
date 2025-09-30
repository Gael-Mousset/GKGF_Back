import { Injectable } from '@nestjs/common';
import { CreatePlateformDto } from './dto/create-plateform.dto';
import { UpdatePlateformDto } from './dto/update-plateform.dto';
import { PrismaService } from 'prisma/services/prisma.service';

@Injectable()
export class PlateformService {
  constructor(private prisma: PrismaService) {}
  create(createPlateformDto: CreatePlateformDto) {
    return this.prisma.plateform.create({
      data: {
        name: createPlateformDto.name,
        maker: createPlateformDto.maker,
      },
    });
  }

  findAll() {
    return this.prisma.plateform.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} plateform`;
  }

  update(id: number, updatePlateformDto: UpdatePlateformDto) {
    return `This action updates a #${id} plateform`;
  }

  remove(id: number) {
    return `This action removes a #${id} plateform`;
  }
}
