import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateFrameworkDto {
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

// readonly id: string;
// name: string;
// type: string;
// description: string;
// documentation: string;
// video?: string;
// frameworks?: CreateFrameworkDto[];
// libraries?: CreateLibraryDto[];
// tools?: CreateToolDto[];

// constructor() {
//   this.id = randomUUID();
// }
// coverImg: string;
// title: string;
// description: string;
// documentation: string;
