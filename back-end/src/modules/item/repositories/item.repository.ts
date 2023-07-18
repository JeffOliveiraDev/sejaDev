import { CreateItemDto } from '../dto/create-item.dto';
import { UpdateItemDto } from '../dto/update-item.dto';
import { Item } from '../entities/item.entity';

export abstract class ItemRepository {
  abstract create(data: CreateItemDto): Promise<Item> | Item;
  abstract findAll(): Promise<Item[]> | Item[];
  abstract findOne(id: string): Promise<Item> | Item;
  abstract findOneByName(name: string): Promise<Item> | Item;
  abstract update(id: string, data: UpdateItemDto): Promise<Item> | Item;
  abstract delete(id: string): Promise<void> | void;
}
