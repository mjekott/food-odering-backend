import { CreateCategoryDto } from './../dtos/createCategory.dto';
import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from '../schema/category.schema';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<CategoryDocument>,
  ) {}

  /**
   * @description creates a new category
   *
   * @param {CreateCategoryDto}
   * @returns {Promise<Category>} a new category
   */
  async create(data: CreateCategoryDto) {
    const { name } = data;
    const categoryExist = await this.categoryModel.findOne({ name });
    if (categoryExist) {
      throw new UnprocessableEntityException(
        `Category with ${name} already exist`,
      );
    }
    const category = new this.categoryModel({ name });
    await category.save();
  }

  /**
   * @description finds a single category in the database
   *
   * @param id
   * @returns {Promise<Category>} a single category
   */
  async findOne(id: string): Promise<Category> {
    const category = await this.categoryModel.findById(id);
    if (!category) {
      throw new UnprocessableEntityException(
        `Category with ${id} doesnt exist`,
      );
    }
    return category;
  }

  /**
   * @description fetches categories from database
   *
   * @returns {Promise<Category[]>} a collection of categories
   */
  async findAll(): Promise<Category[]> {
    const category = await this.categoryModel.find();
    return category;
  }
}
