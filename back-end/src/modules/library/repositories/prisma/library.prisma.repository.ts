import { Injectable } from '@nestjs/common';
import { LibraryRepository } from '../library.repository';
import { CreateLibraryDto } from '../../dto/create-library.dto';
import { UpdateLibraryDto } from '../../dto/update-library.dto';
import { Library } from '../../entities/library.entity';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class LibraryPrismaRepository implements LibraryRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateLibraryDto): Promise<Library> {
    const library = new Library();
    Object.assign(library, {
      ...data,
    });

    const newLibrary = await this.prisma.library.create({
      data: {
        id: library.id,
        name: library.name,
        description: library.description,
        coverImg: library.coverImg,
        documentation: library.documentation,
        itemId: library.itemId,
      },
    });

    return newLibrary;
  }

  async findOne(id: string): Promise<Library> {
    const library = await this.prisma.library.findUnique({
      where: { id },
    });

    return library;
  }
  async findAll(): Promise<object | Library[]> {
    const librarys = await this.prisma.library.findMany();

    return librarys;
  }

  async update(id: string, data: UpdateLibraryDto): Promise<Library> {
    const Library = await this.prisma.library.update({
      where: { id },
      data: { ...data },
    });

    return Library;
  }
  async delete(id: string): Promise<void> {
    await this.prisma.library.delete({
      where: { id },
    });
  }
}
