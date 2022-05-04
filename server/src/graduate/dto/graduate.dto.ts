/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsOptional, MaxLength, MinLength } from 'class-validator';

export class GraduateDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  lastName: string;
  @IsNotEmpty()
  patronymic: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @MinLength(10)
  @MaxLength(10)
  phone?: string;
  
  @IsOptional()
  @IsNotEmpty()
  specialtyID: number;
}

export class GraduateUpdateDto {
  @IsEmail()
  email: string;
  @MinLength(10)
  @MaxLength(10)
  phone: string;
}
