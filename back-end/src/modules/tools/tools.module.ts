import { Module } from '@nestjs/common';
import { ToolsService } from './tools.service';
import { ToolsController } from './tools.controller';
import { ToolsRepository } from './repositories/tools.repositories';
import { ToolsInMemoryRepository } from './repositories/in-memory/tools.in-memory.repository';
import { PrismaService } from 'src/database/prisma.service';
import { ToolsPrismaRepository } from './repositories/prisma/tools.prisma.repository';

@Module({
  controllers: [ToolsController],
  providers: [
    ToolsService,
    PrismaService,
    {
      provide: ToolsRepository,
      useClass: ToolsPrismaRepository,
    },
  ],
})
export class ToolsModule {}
