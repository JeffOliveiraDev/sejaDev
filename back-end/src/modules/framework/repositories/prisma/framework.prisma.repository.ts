import { Injectable } from '@nestjs/common';
import { FrameworkRepository } from '../framework.repository';
import { CreateFrameworkDto } from '../../dto/create-framework.dto';
import { UpdateFrameworkDto } from '../../dto/update-framework.dto';
import { Framework } from '../../entities/framework.entity';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class FrameworkPrismaRepository implements FrameworkRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateFrameworkDto): Promise<Framework> {
    const framework = new Framework();
    Object.assign(framework, {
      ...data,
    });

    const newFramework = await this.prisma.framework.create({
      data: {
        id: framework.id,
        name: framework.name,
        description: framework.description,
        coverImg: framework.coverImg,
        documentation: framework.documentation,
        itemId: framework.itemId,
      },
    });

    return newFramework;
  }

  async findOne(id: string): Promise<Framework> {
    const framework = await this.prisma.framework.findUnique({
      where: { id },
    });

    return framework;
  }
  async findAll(): Promise<object | Framework[]> {
    const frameworks = await this.prisma.framework.findMany();

    return frameworks;
  }
  async update(id: string, data: UpdateFrameworkDto): Promise<Framework> {
    const framework = await this.prisma.framework.update({
      where: { id },
      data: { ...data },
    });

    return framework;
  }
  async delete(id: string): Promise<void> {
    await this.prisma.framework.delete({
      where: { id },
    });
  }
}
