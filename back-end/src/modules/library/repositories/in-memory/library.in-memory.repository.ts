import { CreateLibraryDto } from '../../dto/create-Library.dto';
import { UpdateLibraryDto } from '../../dto/update-Library.dto';
import { Library } from '../../entities/Library.entity';
import { LibraryRepository } from '../Library.repository';

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

  findAll(): Promise<Library> | Library[] {
    return this.database;
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
