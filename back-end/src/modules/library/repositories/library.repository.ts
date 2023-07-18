import { CreateLibraryDto } from '../dto/create-library.dto';
import { UpdateLibraryDto } from '../dto/update-library.dto';
import { Library } from '../entities/library.entity';

export abstract class LibraryRepository {
  abstract create(data: CreateLibraryDto): Promise<Library> | Library;

  abstract findAll(): Promise<object | Library[]>;
  abstract findOne(id: string): Promise<Library> | Library;
  abstract update(
    id: string,
    data: UpdateLibraryDto,
  ): Promise<Library> | Library;
  abstract delete(id: string): Promise<void> | void;
}
