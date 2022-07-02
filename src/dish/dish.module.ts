import { CategeoryController } from './controllers/category.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema, Category } from './schema/category.schema';
import { CategoryService } from './services/category.service';
import { Dish, DishSchema } from './schema/dish.schema';
import { DishService } from './services/dish.service';
import { DishController } from './controllers/dish.controller';
import { MediaModule } from 'src/media/media.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema },
      { name: Dish.name, schema: DishSchema },
    ]),
    MediaModule,
  ],
  providers: [CategoryService, DishService],
  controllers: [CategeoryController, DishController],
})
export class DishModules {}
