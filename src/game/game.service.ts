import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { PrismaService } from 'prisma/services/prisma.service';

@Injectable()
export class GameService {
  constructor(private prisma: PrismaService) {}
  create(createGameDto: CreateGameDto) {
    return this.prisma.game.create({
      data: {
        title: createGameDto.title,
        plateformeName: createGameDto.plateformeName,
        serial_number: createGameDto.serial_number,
        excusivity: createGameDto.excusivity,
        pegi: createGameDto.pegi,
        edition: createGameDto.edition,
        region: createGameDto.region,
        language: createGameDto.language,
        inBox: createGameDto.inBox,
        manual: createGameDto.manual,
        all_support: createGameDto.all_support,
        etat: createGameDto.etat,
        collection: createGameDto.collection,
        throws: createGameDto.throws,
        description: createGameDto.description,
        userId: createGameDto.userId,
      },
    });
  }

  findAll() {
    return `This action returns all game`;
  }

  findOne(id: number) {
    return `This action returns a #${id} game`;
  }

  update(id: number, updateGameDto: UpdateGameDto) {
    return `This action updates a #${id} game`;
  }

  remove(id: number) {
    return `This action removes a #${id} game`;
  }
}
