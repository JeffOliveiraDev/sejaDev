import { Injectable } from '@nestjs/common';
import { ItemRepository } from '../item.repository';
import { CreateItemDto } from '../../dto/create-item.dto';
import { UpdateItemDto } from '../../dto/update-item.dto';
import { Item } from '../../entities/item.entity';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ItemPrismaRepository implements ItemRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateItemDto): Promise<Item> {
    const item = new Item();
    Object.assign(item, {
      ...data,
    });

    const newItem = await this.prisma.item.create({ data: { ...item } });

    return newItem;
  }
  async findAll(): Promise<Item[]> {
    const items = await this.prisma.item.findMany({
      include: { Framework: true, Library: true, Tool: true },
    });

    return items;
  }
  async findOne(id: string): Promise<Item> {
    const item = await this.prisma.item.findUnique({
      where: { id },
      include: { Framework: true, Library: true, Tool: true },
    });
    return item;
  }
  async findOneByName(name: string): Promise<Item> {
    const item = await this.prisma.item.findUnique({
      where: { name },
      include: { Framework: true, Library: true, Tool: true },
    });
    return item;
  }
  async update(id: string, data: UpdateItemDto): Promise<Item> {
    const item = await this.prisma.item.update({
      where: { id },
      data: { ...data },
    });

    return item;
  }
  async delete(id: string): Promise<void> {
    await this.prisma.item.delete({
      where: { id },
    });
  }
}
