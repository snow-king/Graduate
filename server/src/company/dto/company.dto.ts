/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CompanyDto {
  @IsNotEmpty()
  name: string;

  address: string;

  @IsEmail()
  email?: string;
  @MinLength(10)
  @MaxLength(10)
  phone?: string;
  @IsNotEmpty()
  cityId: number
  
}
