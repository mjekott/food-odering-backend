import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { CloudinaryProvider } from './cloudinary.provider';
import { MediaService } from './services/media.service';

@Module({
  imports: [ConfigModule],
  providers: [CloudinaryProvider, MediaService],
  exports: [MediaService],
})
export class MediaModule {}
