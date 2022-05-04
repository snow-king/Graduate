import { Controller, Get, Query } from '@nestjs/common';
import { SpecialtyDto } from './dto';
import { SpecialtyService } from './specialty.service';

@Controller('specialty')
export class SpecialtyController {
  constructor(private specialtyService: SpecialtyService) {}
  @Get('all')
  getAll() {
    this.specialtyService.getAll();
  }
  @Get()
  getOne(@Query() dto: SpecialtyDto) {
    return this.specialtyService.getOne(dto);
  }
}
