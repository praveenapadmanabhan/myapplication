import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TappersModule } from './tappers/tappers.module';
import { ReportModule } from './report/report.module';


@Module({
  imports: [
  ConfigModule.forRoot({
    isGlobal: true, // Makes config available throughout the app
  }),
  MongooseModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => ({
      uri: configService.get<string>('MONGO_URI'),
    }),
  }),
  TappersModule,
  ReportModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
