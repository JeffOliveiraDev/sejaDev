import { CreateFrameworkDto } from '../dto/create-framework.dto';
import { UpdateFrameworkDto } from '../dto/update-framework.dto';
import { Framework } from '../entities/framework.entity';

export abstract class FrameworkRepository {
  abstract create(data: CreateFrameworkDto): Promise<Framework>;
  abstract findAll(): Promise<object | Framework[]>;
  abstract findOne(id: string): Promise<Framework>;
  abstract update(id: string, data: UpdateFrameworkDto): Promise<Framework>;
  abstract delete(id: string): Promise<void> | void;
}
