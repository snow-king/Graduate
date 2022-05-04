import { Body, Controller, Get, Patch, Post, Query } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyDto, WorkerDto } from './dto';

@Controller('company')
export class CompanyController {
  constructor(private companyService: CompanyService) {}
  @Post('add')
  add(@Body() dto: CompanyDto) {
    console.log(dto);
    return this.companyService.add(dto);
  }
  @Post('addWorker')
  addWorkers(@Body() dto: WorkerDto[]) {
    return this.companyService.addWorkers(dto);
  }
  @Patch('updateWorkStatus')
  updateWorkStatus(@Body() dto: WorkerDto) {
    return this.companyService.updateWorkStatus(dto);
  }
  @Get('info/')
  getOne(@Query() query: CompanyDto) {
    return this.companyService.getOne(query);
  }
}
