import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { GraduateDto, GraduateUpdateDto } from './dto';
import { GraduateService } from './graduate.service';

@UseGuards(JwtGuard)
@Controller('graduate')
export class GraduateController {
  constructor(private graduateService: GraduateService) {}
  @Get('all')
  getAll() {
    return this.graduateService.getAll();
  }

  @Post('add')
  add(@Body() dto: GraduateDto[]) {
    return this.graduateService.add(dto);
  }
  @Get()
  getOne(@Query() dto: GraduateDto) {
    return this.graduateService.getOne(dto);
  }
  @Patch('edit/:id')
  edit(@Param() { id }, @Body() dto: GraduateUpdateDto[]) {
    return this.graduateService.edit(Number(id), dto[0]);
  }
}
