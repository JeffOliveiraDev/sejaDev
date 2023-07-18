import { Module } from '@nestjs/common';
import { LibraryService } from './library.service';
import { LibraryController } from './library.controller';
import { LibraryRepository } from './repositories/library.repository';
import { LibraryInMemoryRepository } from './repositories/in-memory/library.in-memory.repository';

@Module({
  controllers: [LibraryController],
  providers: [
    LibraryService,
    {
      provide: LibraryRepository,
      useClass: LibraryInMemoryRepository,
    },
  ],
})
export class LibraryModule {}
