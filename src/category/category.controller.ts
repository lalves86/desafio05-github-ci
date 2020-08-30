import { Controller, Get, Post, Body } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Category } from 'src/models/Category';
import { InjectRepository } from '@nestjs/typeorm';

interface CreateCategoryDto {
  name: string;
}

@Controller('categories')
export class CategoryController {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>
  ){}

  @Get()
  async index(): Promise<Category[]> {
    return this.categoriesRepository.find();
  }

  @Post()
  async store(@Body() body: CreateCategoryDto): Promise<Category> {
    const category = this.categoriesRepository.create(body);

    return this.categoriesRepository.save(category);
  }
}
