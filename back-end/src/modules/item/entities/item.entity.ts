import { randomUUID } from 'node:crypto';
import { CreateFrameworkDto } from 'src/modules/framework/dto/create-framework.dto';
import { Framework } from 'src/modules/framework/entities/framework.entity';
import { CreateLibraryDto } from 'src/modules/library/dto/create-library.dto';
import { Library } from 'src/modules/library/entities/Library.entity';
import { CreateToolDto } from 'src/modules/tools/dto/create-tool.dto';
import { Tool } from 'src/modules/tools/entities/Tool.entity';

export class Item {
  readonly id: string;
  name: string;
  type: string;
  description: string;
  documentation: string;
  video?: string;
  frameworks?: Framework[];
  libraries?: Library[];
  tools?: Tool[];

  constructor() {
    this.id = randomUUID();
  }
}
