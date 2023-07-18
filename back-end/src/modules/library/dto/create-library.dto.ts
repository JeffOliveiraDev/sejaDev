import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateLibraryDto {
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
