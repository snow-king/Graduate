import { ForbiddenException, HttpCode, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { GraduateDto, GraduateUpdateDto } from './dto';

@Injectable({})
export class GraduateService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    try {
      const graduates = await this.prisma.graduate.findMany();
      console.log(`data - ${graduates}`);
      return graduates;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credential taken');
        }
      }
      throw error;
    }
  }
  @HttpCode(201)
  async add(dto: GraduateDto[]) {
    try {
      console.log(dto);
      dto.forEach(async (element) => {
        await this.prisma.graduate.create({
          data: {
            name: element.name,
            lastName: element.lastName,
            patronymic: element.patronymic,
            phone: element?.phone,
            email: element?.email,
            specialtyId: element?.specialtyID,
          },
        });
      });

      return true;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credential taken');
        }
      }
      throw error;
    }
  }
  async getOne(dto: GraduateDto) {
    try {
      const graduate = await this.prisma.graduate.findFirst({
        where: {
          name: dto.name,
          lastName: dto.lastName,
          patronymic: dto.patronymic,
        },
      });
      if (!graduate) throw new ForbiddenException('Credentials incorrect');
      return graduate;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credential taken');
        }
      }
    }
  }
  async edit(GraduateId: number, dto: GraduateUpdateDto) {
    try {
      const updateGraduate = await this.prisma.graduate.update({
        where: {
          id: GraduateId,
        },
        data: {
          email: dto.email,
          phone: dto.phone,
        },
      });
      return updateGraduate;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credential taken');
        }
      }
    }
  }
}
