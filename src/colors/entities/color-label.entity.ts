import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
} from 'typeorm';
import { Color } from './color.entity';

@Entity('color_labels')
@Unique(['color', 'locale']) // 같은 색에 같은 언어 중복 방지
export class ColorLabel {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 10 })
  locale: string;

  @Column()
  name: string;

  @Column({ nullable: true, type: 'text' })
  describe: string | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Color, (color) => color.labels, {
    onDelete: 'CASCADE',
  })
  color: Color;
}
