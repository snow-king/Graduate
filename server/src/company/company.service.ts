import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { CompanyDto } from './dto';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}
  async add(dto: CompanyDto) {
    try {
      await this.prisma.company.create({
        data: {
          name: dto.name,
          phone: dto.phone,
          webAddress: dto?.email,
          cityId: dto?.cityId,
          address: dto?.address,
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credential taken');
        }
      }
    }
  }
  async getOne(dto: CompanyDto) {
    try {
      const company = this.prisma.company.findUnique({
        where: {
          name: dto.name,
        },
      });
      return company;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credential taken');
        }
      }
    }
  }
  async getAll() {
    try {
      const companies = await this.prisma.company.findMany({});
      return companies;
    } catch {}
  }
}
