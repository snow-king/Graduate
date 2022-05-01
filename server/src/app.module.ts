import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { GraduateController } from './graduate/graduate.controller';
import { GraduateModule } from './graduate/graduate.module';
import { CompanyController } from './company/company.controller';
import { CompanyService } from './company/company.service';
import { CompanyModule } from './company/company.module';
import { SpecialtyController } from './specialty/specialty.controller';
import { SpecialtyModule } from './specialty/specialty.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraduateModule,
    CompanyModule,
    SpecialtyModule,
  ],
  controllers: [GraduateController, CompanyController, SpecialtyController],
  providers: [CompanyService],
})
export class AppModule {}
