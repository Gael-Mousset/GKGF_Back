import { Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { prisma } from 'prisma/seed/utiles';

@Injectable()
export class LocationService {
  create(createLocationDto: CreateLocationDto) {
    return prisma.location.create({
      data: {
        name: createLocationDto.name,
      },
    });
  }

  findAll() {
    return prisma.location.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} location`;
  }

  update(id: number, updateLocationDto: UpdateLocationDto) {
    return `This action updates a #${id} location`;
  }

  remove(id: number) {
    return `This action removes a #${id} location`;
  }
}
