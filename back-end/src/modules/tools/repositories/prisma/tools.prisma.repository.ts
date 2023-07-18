import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/database/prisma.service';
import { CreateToolDto } from '../../dto/create-tool.dto';
import { ToolsRepository } from '../tools.repositories';

import { Tool } from '../../entities/Tool.entity';
import { UpdateToolDto } from '../../dto/update-tool.dto';

@Injectable()
export class ToolsPrismaRepository implements ToolsRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateToolDto): Promise<Tool> {
    const tools = new Tool();
    Object.assign(tools, {
      ...data,
    });

    const newTools = await this.prisma.tool.create({
      data: {
        id: tools.id,
        name: tools.name,
        description: tools.description,
        coverImg: tools.coverImg,
        documentation: tools.documentation,
        itemId: tools.itemId,
      },
    });

    return newTools;
  }

  async findOne(id: string): Promise<Tool> {
    const tools = await this.prisma.tool.findUnique({
      where: { id },
    });

    return tools;
  }
  async findAll(): Promise<object | Tool[]> {
    const tools = await this.prisma.tool.findMany();

    return tools;
  }

  async update(id: string, data: UpdateToolDto): Promise<Tool> {
    const tools = await this.prisma.tool.update({
      where: { id },
      data: { ...data },
    });

    return tools;
  }
  async delete(id: string): Promise<void> {
    await this.prisma.tool.delete({
      where: { id },
    });
  }
}
