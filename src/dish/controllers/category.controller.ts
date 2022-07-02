import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateCategoryDto } from '../dtos/createCategory.dto';
import { Category } from '../schema/category.schema';
import { CategoryService } from './../services/category.service';

@ApiTags('categories')
@Controller('categories')
export class CategeoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @ApiOperation({ summary: 'Create category' })
  @ApiResponse({ status: 422, description: 'Bad input value' })
  @ApiResponse({ status: 201, description: 'category created' })
  async create(@Body() data: CreateCategoryDto) {
    return this.categoryService.create({ data });
  }

  @Get()
  @ApiOperation({ summary: 'Get all categories' })
  @ApiResponse({ status: 200, description: 'an array of categories' })
  async findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get all categories' })
  @ApiResponse({
    status: 200,
    description: 'an array of categories',
    type: [Category],
  })
  async findOne(@Param('id') id: string) {
    return this.categoryService.findOne(id);
  }
}
