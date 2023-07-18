import { Injectable } from '@nestjs/common';
import { CreateFrameworkDto } from '../../dto/create-framework.dto';
import { UpdateFrameworkDto } from '../../dto/update-framework.dto';
import { Framework } from '../../entities/framework.entity';
import { FrameworkRepository } from '../framework.repository';

@Injectable()
export class FrameworkInMemoryRepository implements FrameworkRepository {
  private database: Framework[] = [];
  async create(data: CreateFrameworkDto): Promise<Framework> {
    const newFramework = new Framework();
    Object.assign(newFramework, {
      ...data,
    });

    this.database.push(newFramework);

    return newFramework;
  }

  async findAll(): Promise<object | Framework[]> {
    return this.database;
  }
  async findOne(id: string): Promise<Framework> {
    const framework = this.database.find((framework) => framework.id === id);
    return framework;
  }
  async update(id: string, data: UpdateFrameworkDto): Promise<Framework> {
    const frameworkIndex = this.database.findIndex(
      (framework) => framework.id === id,
    );
    this.database[frameworkIndex] = {
      ...this.database[frameworkIndex],
      ...data,
    };
    return this.database[frameworkIndex];
  }
  async delete(id: string): Promise<void> {
    const frameworkIndex = this.database.findIndex(
      (framework) => framework.id === id,
    );
    this.database.splice(frameworkIndex, 1);
  }
}
