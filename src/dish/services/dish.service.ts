import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DishDocument } from '../schema/dish.schema';
import { CreateDishDto } from './../dtos/createDish.dto';
import { Dish } from './../schema/dish.schema';

@Injectable()
export class DishService {
  constructor(
    @InjectModel(Dish.name) private readonly dishModel: Model<DishDocument>,
  ) {}

  /**
   * @description create dish service
   * @param data
   */
  async create(data: CreateDishDto) {
    const { name } = data;
    const existingDish = await this.dishModel.findOne({ name });
    if (existingDish) {
      throw new UnprocessableEntityException(`Dish with ${name} already exist`);
    }

    const dish = new this.dishModel(data);
    await dish.save();
  }

  /**
   *
   * @returns {Promise<Dish[]>}
   */
  async getAll(): Promise<Dish[]> {
    return this.dishModel.find().populate('category', '_id name');
  }

  /**
   *
   * @param id
   * @returns {Promise<Dish>}
   */
  async getOne(id: string): Promise<Dish> {
    return this.dishModel.findById(id);
  }
}
