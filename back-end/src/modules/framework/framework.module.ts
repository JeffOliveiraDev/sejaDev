import { Module } from '@nestjs/common';
import { FrameworkService } from './framework.service';
import { FrameworkController } from './framework.controller';
import { FrameworkRepository } from './repositories/framework.repository';
import { FrameworkInMemoryRepository } from './repositories/in-memory/framework.in-memory.repository';
import { PrismaService } from 'src/database/prisma.service';
import { FrameworkPrismaRepository } from './repositories/prisma/framework.prisma.repository';

@Module({
  controllers: [FrameworkController],
  providers: [
    FrameworkService,
    PrismaService,
    {
      provide: FrameworkRepository,
      useClass: FrameworkPrismaRepository,
    },
  ],
})
export class FrameworkModule {}
