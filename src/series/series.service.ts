import { Injectable } from '@nestjs/common';
import { CreateSeriesDto } from './dto/create-series.dto';
import { UpdateSeriesDto } from './dto/update-series.dto';
import { prisma } from 'prisma/seed/utiles';

@Injectable()
export class SeriesService {
  create(createSeriesDto: CreateSeriesDto) {
    return prisma.series.create({
      data: {
        name: createSeriesDto.name,
      },
    });
  }

  findAll() {
    return prisma.series.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} series`;
  }

  update(id: number, updateSeriesDto: UpdateSeriesDto) {
    return `This action updates a #${id} series`;
  }

  remove(id: number) {
    return `This action removes a #${id} series`;
  }
}
