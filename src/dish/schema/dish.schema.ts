import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Length } from 'class-validator';
import mongoose, { Document } from 'mongoose';
import { Category } from './category.schema';

export type DishDocument = Dish & Document;

@Schema()
export class Photo {
  @Prop({ required: true })
  @ApiProperty({
    description: 'public id of photo',
  })
  publid_id: string;

  @Prop({ required: true })
  @ApiProperty({
    description: 'url of photo',
  })
  url: string;
}

@Schema({ timestamps: true })
export class Dish {
  @ApiProperty({ description: 'id of category' })
  _id: number;

  @Prop({ required: true, unique: true, maxlength: 25 })
  @ApiProperty({ example: 'Afang soup', description: 'name of dish' })
  @IsString()
  @Length(2, 25)
  name: string;

  @Prop({ required: true, maxlength: 200 })
  @IsString()
  @Length(10, 200)
  @ApiProperty({
    example: 'Native soup from nigeria',
    description: 'desciption of dish',
  })
  description: string;

  @Prop({ required: true, type: Number })
  @ApiProperty({ example: '25', description: 'price of dish' })
  @IsNumber()
  price: string;

  @Prop({ required: true, type: Photo })
  @ApiProperty({ description: 'image picture' })
  images: Photo;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Category.name })
  @ApiProperty({ description: 'name of category' })
  @IsString()
  categoryId: string;
}

export const DishSchema = SchemaFactory.createForClass(Dish);
