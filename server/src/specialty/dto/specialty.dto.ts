/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsOptional } from 'class-validator';

export class SpecialtyDto {
  @IsOptional()
  @IsNotEmpty()
  name: string;
  shortName: string;
}
