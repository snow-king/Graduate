import { Module } from '@nestjs/common';
import { SpecialtyService } from './specialty.service';

@Module({
  providers: [SpecialtyService],
})
export class SpecialtyModule {}
