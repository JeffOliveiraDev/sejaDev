import { randomUUID } from 'node:crypto';

export class Tool {
  readonly id: string;
  coverImg: string;
  name: string;
  description: string;
  documentation: string;
  itemId?: string;

  constructor() {
    this.id = randomUUID();
  }
}
