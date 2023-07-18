import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ItemRepository } from './repositories/item.repository';

@Injectable()
export class ItemService {
  constructor(private itemRepository: ItemRepository) {}
  async create(createItemDto: CreateItemDto) {
    const findItem = await this.itemRepository.findOneByName(
      createItemDto.name,
    );

    if (findItem) {
      throw new ConflictException('Item já existe');
    }

    const item = await this.itemRepository.create(createItemDto);

    return item;
  }

  async findAll() {
    const items = await this.itemRepository.findAll();
    return items;
  }

  async findOne(id: string) {
    const item = await this.itemRepository.findOne(id);

    if (!item) {
      throw new NotFoundException('Não encontrado');
    }

    return item;
  }

  async update(id: string, updateItemDto: UpdateItemDto) {
    const item = await this.itemRepository.update(id, updateItemDto);

    if (!item) {
      throw new NotFoundException('Não encontrado');
    }

    return item;
  }

  async remove(id: string) {
    const item = await this.itemRepository.findOne(id);

    if (!item) {
      throw new NotFoundException('Não encontrado');
    }
    const itemDelete = await this.itemRepository.delete(id);

    return;
  }
}
