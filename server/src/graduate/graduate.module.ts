import { Module } from '@nestjs/common';
import { GraduateService } from './graduate.service';
import { GraduateController } from './graduate.controller';

@Module({
  controllers: [GraduateController],
  providers: [GraduateService],
  exports: [GraduateService],
})
export class GraduateModule {}
