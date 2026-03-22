import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from 'orm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        process.env.NODE_ENV === 'production'
          ? '.prod.env'
          : process.env.NODE_ENV === 'stage'
            ? '.stage.env'
            : '.dev.env',
      ],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: ormConfig,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
