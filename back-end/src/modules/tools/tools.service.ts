import { Injectable } from '@nestjs/common';
import { CreateToolDto } from './dto/create-tool.dto';
import { UpdateToolDto } from './dto/update-tool.dto';
import { ToolsRepository } from './repositories/tools.repositories';

@Injectable()
export class ToolsService {
  constructor(private toolRepository: ToolsRepository) {}
  async create(CreateToolDto: CreateToolDto) {
    const tool = await this.toolRepository.create(CreateToolDto);

    return tool;
  }

  async findAll() {
    const tools = await this.toolRepository.findAll();
    return tools;
  }

  async findOne(id: string) {
    const tool = await this.toolRepository.findOne(id);

    return tool;
  }

  async update(id: string, updateToolDto: UpdateToolDto) {
    const tool = await this.toolRepository.update(id, updateToolDto);
    return tool;
  }

  async remove(id: string) {
    const tool = await this.toolRepository.delete(id);
    return;
  }
}
