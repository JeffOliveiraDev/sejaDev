import { Injectable } from '@nestjs/common';
import { CreateLibraryDto } from './dto/create-library.dto';
import { UpdateLibraryDto } from './dto/update-library.dto';
import { LibraryRepository } from './repositories/library.repository';

@Injectable()
export class LibraryService {
  constructor(private libraryRepository: LibraryRepository) {}
  async create(createLibraryDto: CreateLibraryDto) {
    const Library = await this.libraryRepository.create(createLibraryDto);

    return Library;
  }

  async findAll() {
    const Library = await this.libraryRepository.findAll();
    return Library;
  }

  async findOne(id: string) {
    const library = await this.libraryRepository.findOne(id);

    return library;
  }

  async update(id: string, updateLibraryDto: UpdateLibraryDto) {
    const library = await this.libraryRepository.update(id, updateLibraryDto);
    return library;
  }

  async remove(id: string) {
    const library = await this.libraryRepository.delete(id);
    return;
  }
}
