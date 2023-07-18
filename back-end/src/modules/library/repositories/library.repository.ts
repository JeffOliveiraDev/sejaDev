import { CreateLibraryDto } from '../dto/create-Library.dto';
import { UpdateLibraryDto } from '../dto/update-Library.dto';
import { Library } from '../entities/Library.entity';

export abstract class LibraryRepository {
  abstract create(data: CreateLibraryDto): Promise<Library> | Library;
  abstract findAll(): Promise<Library> | Library[];
  abstract findOne(id: string): Promise<Library> | Library;
  abstract update(
    id: string,
    data: UpdateLibraryDto,
  ): Promise<Library> | Library;
  abstract delete(id: string): Promise<void> | void;
}
