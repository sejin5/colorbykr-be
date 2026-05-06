import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Color } from './entities/color.entity';

const SELECT_OPTIONS = {
  id: true,
  hex: true,
  name: true,
  code: true,
  labels: {
    id: true,
    locale: true,
    name: true,
    describe: true,
  },
};

@Injectable()
export class ColorsService {
  constructor(
    @InjectRepository(Color)
    private colorRepository: Repository<Color>,
  ) {}

  findAll() {
    return this.colorRepository.find({
      select: SELECT_OPTIONS,
      relations: ['labels'],
    });
  }

  findByCode(code: number) {
    return this.colorRepository.find({
      where: { code },
      select: SELECT_OPTIONS,
      relations: ['labels'],
    });
  }
}
