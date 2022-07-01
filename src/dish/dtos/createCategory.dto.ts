import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({ description: 'name of category', example: 'pizza' })
  @IsString()
  @Length(3)
  name: string;
}
