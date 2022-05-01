import { Controller, Post } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyDto } from './dto';

@Controller('company')
export class CompanyController {
  constructor(private companyService: CompanyService) {}
  @Post('add')
  add(dto: CompanyDto) {
    return this.companyService.add(dto);
  }
}
