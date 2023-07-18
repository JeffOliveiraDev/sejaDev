import { randomUUID } from 'node:crypto';

export class Framework {
  readonly id: string;
  name: string;
  coverImg: string;
  description: string;
  documentation: string;
  itemId?: string;

  constructor() {
    this.id = randomUUID();
  }
}
