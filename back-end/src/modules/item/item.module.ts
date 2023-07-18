import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { ItemRepository } from './repositories/item.repository';
import { ItemInMemoryRepository } from './repositories/in-memory/item.in-memory.repository';
import { PrismaService } from 'src/database/prisma.service';
import { ItemPrismaRepository } from './repositories/prisma/item.prisma.repository';

@Module({
  controllers: [ItemController],
  providers: [
    ItemService,
    PrismaService,
    {
      provide: ItemRepository,
      useClass: ItemPrismaRepository,
    },
  ],
})
export class ItemModule {}
