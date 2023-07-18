import { CreateToolDto } from '../dto/create-tool.dto';
import { UpdateToolDto } from '../dto/update-Tool.dto';
import { Tool } from '../entities/Tool.entity';

export abstract class ToolsRepository {
  abstract create(data: CreateToolDto): Promise<Tool> | Tool;
  abstract findAll(): Promise<object> | Tool[];
  abstract findOne(id: string): Promise<Tool> | Tool;
  abstract update(id: string, data: UpdateToolDto): Promise<Tool> | Tool;
  abstract delete(id: string): Promise<void> | void;
}
