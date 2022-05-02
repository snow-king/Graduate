import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { CompanyDto, WorkerDto } from './dto';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}
  async add(dto: CompanyDto) {
    try {
      const company = await this.prisma.company.create({
        data: {
          name: dto.name,
          phone: dto?.phone,
          webAddress: dto?.email,
          cityId: dto?.cityId,
          address: dto?.address,
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
  async getOne(dto: CompanyDto) {
    try {
      const company = this.prisma.company.findUnique({
        where: {
          name: dto.name,
        },
        include: {
          workers: {
            select: {
              graduate: true,
            },
          },
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
  async addWorkers(dto: WorkerDto[]) {
    try {
      dto.forEach(async (element) => {
        await this.prisma.worker.create({
          data: {
            companyId: element.companyID,
            graduateId: element.graduateID,
            statusWork: true,
          },
        });
      });
    } catch (error) {}
  }
  async updateWorkStatus(dto: WorkerDto) {
    try {
      const updateGraduate = await this.prisma.worker.update({
        where: {
          graduateWork: {
            graduateId: dto.graduateID,
            companyId: dto.companyID,
          },
        },
        data: {
          statusWork: dto.statusWork,
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
