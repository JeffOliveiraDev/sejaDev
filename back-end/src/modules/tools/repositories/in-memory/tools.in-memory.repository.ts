import { CreateToolDto } from '../../dto/create-tool.dto';
import { UpdateToolDto } from '../../dto/update-tool.dto';
import { Tool } from '../../entities/Tool.entity';
import { ToolsRepository } from '../tools.repositories';

export class ToolsInMemoryRepository implements ToolsRepository {
  private database: Tool[] = [];
  create(data: CreateToolDto): Tool | Promise<Tool> {
    const newTools = new Tool();
    Object.assign(newTools, {
      ...data,
    });

    this.database.push(newTools);

    return newTools;
  }

  findAll(): Promise<Tool> | Tool[] {
    return this.database;
  }
  findOne(id: string): Tool | Promise<Tool> {
    const tools = this.database.find((tools) => tools.id === id);
    return tools;
  }
  update(id: string, data: UpdateToolDto): Tool | Promise<Tool> {
    const toolsIndex = this.database.findIndex((tools) => tools.id === id);
    this.database[toolsIndex] = {
      ...this.database[toolsIndex],
      ...data,
    };
    return this.database[toolsIndex];
  }
  delete(id: string): void | Promise<void> {
    const toolsIndex = this.database.findIndex((tools) => tools.id === id);
    this.database.splice(toolsIndex, 1);
  }
}
