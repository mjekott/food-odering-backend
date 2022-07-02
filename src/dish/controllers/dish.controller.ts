import { Dish } from './../schema/dish.schema';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Photo } from '../schema/dish.schema';
import { MediaService } from './../../media/services/media.service';
import { CreateDishDto } from './../dtos/createDish.dto';
import { DishFileUploadDto } from './../dtos/dishFileUplaod.dto';
import { DishService } from './../services/dish.service';

@ApiTags('dishes')
@Controller('dishes')
export class DishController {
  constructor(
    private readonly dishService: DishService,
    private readonly mediaSerivce: MediaService,
  ) {}

  @HttpCode(201)
  @Post()
  @ApiOperation({ summary: 'Create category' })
  @ApiResponse({ status: 422, description: 'Bad input value' })
  @ApiResponse({ status: 201, description: 'successfull' })
  async createDish(@Body() data: CreateDishDto) {
    return await this.dishService.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Get All Dishes' })
  @ApiResponse({ status: 200, description: 'successfull', type: [Dish] })
  async getAll() {
    return await this.dishService.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single dish' })
  @ApiResponse({ status: 200, description: 'successfull', type: [Dish] })
  async getOne(@Param('id') id: string) {
    return await this.dishService.getOne(id);
  }

  @HttpCode(201)
  @Post('upload')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'image upload',
    type: DishFileUploadDto,
  })
  @ApiOperation({ summary: 'Upload dish Photo' })
  @ApiResponse({ status: 422, description: 'Bad input value' })
  @ApiResponse({
    status: 201,
    description: 'successfull',
    type: Photo,
  })
  @UseInterceptors(FileInterceptor('file'))
  async uploadDishPhoto(@UploadedFile() file: Express.Multer.File) {
    const { public_id, url } = await this.mediaSerivce.uploadDishPhoto(file);
    return { public_id, url };
  }
}
