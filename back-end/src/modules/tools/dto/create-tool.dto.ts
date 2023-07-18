import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateToolDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  coverImg: string;

  @IsString()
  @IsNotEmpty()
  documentation: string;

  @IsString()
  @IsOptional()
  itemId: string;
}
