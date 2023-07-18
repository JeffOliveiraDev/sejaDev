import { randomUUID } from 'node:crypto';
import { Framework } from 'src/modules/framework/entities/framework.entity';
import { Library } from 'src/modules/library/entities/library.entity';
import { Tool } from 'src/modules/tools/entities/tool.entity';

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
