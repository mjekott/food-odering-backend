import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema({ timestamps: true })
export class Category {
  @ApiProperty({ description: 'id of category' })
  _id: number;

  @Prop({ required: true })
  @ApiProperty({ example: 'pizza', description: 'name of category' })
  name: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
