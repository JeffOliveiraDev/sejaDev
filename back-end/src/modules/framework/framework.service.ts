import { Injectable } from '@nestjs/common';
import { CreateFrameworkDto } from './dto/create-framework.dto';
import { UpdateFrameworkDto } from './dto/update-framework.dto';
import { FrameworkRepository } from './repositories/framework.repository';

@Injectable()
export class FrameworkService {
  constructor(private frameworkRepository: FrameworkRepository) {}
  async create(createFrameworkDto: CreateFrameworkDto) {
    const framework = await this.frameworkRepository.create(createFrameworkDto);

    return framework;
  }

  async findAll() {
    const framework = await this.frameworkRepository.findAll();
    return framework;
  }

  async findOne(id: string) {
    const framework = await this.frameworkRepository.findOne(id);

    return framework;
  }

  async update(id: string, updateFrameworkDto: UpdateFrameworkDto) {
    const framework = await this.frameworkRepository.update(
      id,
      updateFrameworkDto,
    );
    return framework;
  }

  async remove(id: string) {
    const framework = await this.frameworkRepository.delete(id);
    return;
  }
}
