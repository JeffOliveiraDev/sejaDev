import { CreateLibraryDto } from '../../dto/create-library.dto';
import { UpdateLibraryDto } from '../../dto/update-library.dto';
import { Library } from '../../entities/library.entity';
import { LibraryRepository } from '../library.repository';

export class LibraryInMemoryRepository implements LibraryRepository {
  private database: Library[] = [];
  create(data: CreateLibraryDto): Library | Promise<Library> {
    const newLibrary = new Library();
    Object.assign(newLibrary, {
      ...data,
    });

    this.database.push(newLibrary);

    return newLibrary;
  }

  async findAll(): Promise<object | Library[]> {
    const librarys = await this.findAll();

    return librarys;
  }
  findOne(id: string): Library | Promise<Library> {
    const library = this.database.find((library) => library.id === id);
    return library;
  }
  update(id: string, data: UpdateLibraryDto): Library | Promise<Library> {
    const libraryIndex = this.database.findIndex(
      (library) => library.id === id,
    );
    this.database[libraryIndex] = {
      ...this.database[libraryIndex],
      ...data,
    };
    return this.database[libraryIndex];
  }
  delete(id: string): void | Promise<void> {
    const libraryIndex = this.database.findIndex(
      (library) => library.id === id,
    );
    this.database.splice(libraryIndex, 1);
  }
}
