import { ApiProperty } from '@nestjs/swagger';

export class DishFileUploadDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  file: any;
}
