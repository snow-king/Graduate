/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class GraduateDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  lastName: string;
  @IsNotEmpty()
  patronymic: string;
  @IsEmail()
  email?: string;
  @MinLength(10)
  @MaxLength(10)
  phone?: string;
  specialtyID: number;
}

export class GraduateUpdateDto {
  @IsEmail()
  email: string;
  @MinLength(10)
  @MaxLength(10)
  phone: string;
}
