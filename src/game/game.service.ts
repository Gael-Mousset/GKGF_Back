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
        series: { connect: { id: createGameDto.idSeries } },
        sortTitle: createGameDto.sortTitle,
        plateforme: { connect: { id: createGameDto.plateformeId } },
        serial_number: createGameDto.serial_number,
        barcode: createGameDto.barcode,
        format: createGameDto.format,
        editions: { connect: { id: createGameDto.idEdition } },
        region: createGameDto.region,
        audience: createGameDto.audience,
        language: createGameDto.language,
        excusivity: createGameDto.excusivity,
        jeux: createGameDto.jeux,
        boite: createGameDto.boite,
        manuel: createGameDto.manuel,
        etatJeu: createGameDto.etatJeu,
        launch: createGameDto.launch,
        etatbox: createGameDto.etatbox,
        etatManuel: createGameDto.etatManuel,
        objectif: createGameDto.objectif,
        location: { connect: { id: createGameDto.idLocation } },
        description: createGameDto.description,
        user: { connect: { id: createGameDto.userId } },
        vente: createGameDto.vente
          ? {
              create: {
                prix_achat: createGameDto.vente?.prix_achat,
                date_achat: createGameDto.vente?.date_achat,
                prix_estime: createGameDto.vente?.prix_estime,
              },
            }
          : undefined,
      },
    });
  }

  findAll() {
    return this.prisma.game.findMany({
      select: {
        id: true,
        title: true,
        sortTitle: true,
        series: { select: { id: true, name: true } },

        plateforme: { select: { id: true, name: true } },
        serial_number: true,
        barcode: true,
        format: true,

        editions: { select: { id: true, name: true } },
        region: true,
        audience: true,
        language: true,
        excusivity: true,

        jeux: true,
        boite: true,
        manuel: true,
        etatJeu: true,
        launch: true,
        etatbox: true,
        etatManuel: true,

        objectif: true,
        location: { select: { id: true, name: true } },

        description: true,
        user: { select: { id: true, name: true } },
      },
    });
  }

  findOne(id: number) {
    return this.prisma.game.findFirst({
      where: { id: id },
      select: {
        id: true,
        title: true,
        sortTitle: true,
        series: { select: { id: true, name: true } },

        plateforme: { select: { id: true, name: true } },
        serial_number: true,
        barcode: true,
        format: true,

        editions: { select: { id: true, name: true } },
        region: true,
        audience: true,
        language: true,
        excusivity: true,

        jeux: true,
        boite: true,
        manuel: true,
        etatJeu: true,
        launch: true,
        etatbox: true,
        etatManuel: true,

        objectif: true,
        location: { select: { id: true, name: true } },

        description: true,
        user: { select: { id: true, name: true } },
      },
    });
  }

  update(id: number, updateGameDto: UpdateGameDto) {
    return `This action updates a #${id} game`;
  }

  remove(id: number) {
    return `This action removes a #${id} game`;
  }
}
