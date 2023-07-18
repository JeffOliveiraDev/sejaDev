import { Module } from '@nestjs/common';
import { ToolsService } from './tools.service';
import { ToolsController } from './tools.controller';
import { ToolsRepository } from './repositories/tools.repositories';
import { ToolsInMemoryRepository } from './repositories/in-memory/tools.in-memory.repository';

@Module({
  controllers: [ToolsController],
  providers: [
    ToolsService,
    {
      provide: ToolsRepository,
      useClass: ToolsInMemoryRepository,
    },
  ],
})
export class ToolsModule {}
