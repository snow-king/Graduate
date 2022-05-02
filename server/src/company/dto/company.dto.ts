/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsOptional, MaxLength, MinLength } from 'class-validator';

export class CompanyDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  address?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  webAddress: string;

  @IsOptional()
  @MinLength(11)
  @MaxLength(11)
  phone?: string;
  
  @IsOptional()
  @IsNotEmpty()
  cityId: number
  
}

export class WorkerDto {
  @IsNotEmpty()
  graduateID: number
  @IsNotEmpty()
  companyID: number
  @IsOptional()
  statusWork: boolean 
}
