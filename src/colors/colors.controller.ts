import { Controller, Get, Param } from '@nestjs/common';
import { ColorsService } from './colors.service';

@Controller('colors')
export class ColorsController {
  constructor(private readonly colorsService: ColorsService) {}

  @Get()
  findAll() {
    return this.colorsService.findAll();
  }

  @Get('/:code')
  findByCode(@Param('code') code: number) {
    return this.colorsService.findByCode(code);
  }
}
