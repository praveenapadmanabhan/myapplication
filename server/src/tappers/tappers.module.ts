// tappers.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TappersService } from './tappers.service';
import { TappersController } from './tappers.controller';
import { Tappers, TappersSchema } from './entities/tapper.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tappers.name, schema: TappersSchema }]),
  ],
  controllers: [TappersController],
  providers: [TappersService],
  exports: [TappersService], // Export if needed by other modules
})
export class TappersModule {}
