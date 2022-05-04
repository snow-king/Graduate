import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { SpecialtyDto } from './dto';

@Injectable()
export class SpecialtyService {
  constructor(private prisma: PrismaService) {}
  async getAll() {
    try {
      const specialty = await this.prisma.specialty.findMany();
      return specialty;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credential taken');
        }
      }
    }
  }
  async getOne(dto: SpecialtyDto) {
    try {
      const specialty = await this.prisma.graduate.findFirst({
        where: {
          name: dto.shortName,
        },
      });
      if (!specialty) throw new ForbiddenException('Credentials incorrect');
      return specialty;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credential taken');
        }
      }
    }
  }
}
