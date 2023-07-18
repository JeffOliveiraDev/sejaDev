import { Module } from '@nestjs/common';
import { LibraryService } from './library.service';
import { LibraryController } from './library.controller';
import { LibraryRepository } from './repositories/library.repository';
import { LibraryInMemoryRepository } from './repositories/in-memory/library.in-memory.repository';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { LibraryPrismaRepository } from './repositories/prisma/library.prisma.repository';

@Module({
  controllers: [LibraryController],
  providers: [
    LibraryService,
    PrismaService,
    {
      provide: LibraryRepository,
      useClass: LibraryPrismaRepository,
    },
  ],
})
export class LibraryModule {}
