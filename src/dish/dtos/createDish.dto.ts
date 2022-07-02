import { OmitType } from '@nestjs/swagger';
import { Dish } from '../schema/dish.schema';

export class CreateDishDto extends OmitType(Dish, ['_id']) {}
