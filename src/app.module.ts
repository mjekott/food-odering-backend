import { MediaModule } from './media/media.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as joi from 'joi';
import { DatabaseModule } from './database/database.module';
import { DishModules } from './dish/dish.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      validationSchema: joi.object({
        MONGO_URL: joi.string().required(),
      }),
    }),
    DatabaseModule,
    DishModules,
    MediaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
