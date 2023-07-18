import { Injectable } from '@nestjs/common';
import { CreateItemDto } from '../../dto/create-item.dto';
import { UpdateItemDto } from '../../dto/update-item.dto';
import { Item } from '../../entities/item.entity';
import { ItemRepository } from '../item.repository';

// @Injectable
export class ItemInMemoryRepository implements ItemRepository {
  private database: Item[] = [];
  async create(data: CreateItemDto): Promise<Item> {
    const newItem = new Item();
    Object.assign(newItem, {
      ...data,
    });

    this.database.push(newItem);

    return newItem;
  }

  async findAll(): Promise<Item[]> {
    return this.database;
  }
  async findOne(id: string): Promise<Item> {
    const item = this.database.find((item) => item.id === id);
    return item;
  }

  async findOneByName(name: string): Promise<Item> {
    const item = this.database.find((item) => item.name === name);
    return item;
  }

  async update(id: string, data: UpdateItemDto): Promise<Item> {
    const itemIndex = this.database.findIndex((item) => item.id === id);
    this.database[itemIndex] = {
      ...this.database[itemIndex],
      ...data,
    };
    return this.database[itemIndex];
  }
  async delete(id: string): Promise<void> {
    const itemIndex = this.database.findIndex((item) => item.id === id);
    this.database.splice(itemIndex, 1);
  }
}
