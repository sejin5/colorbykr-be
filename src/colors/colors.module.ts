import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Color } from './entities/color.entity';
import { ColorLabel } from './entities/color-label.entity';
import { ColorsService } from './colors.service';
import { ColorsController } from './colors.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Color, ColorLabel])],
  controllers: [ColorsController],
  providers: [ColorsService],
})
export class ColorsModule {}
