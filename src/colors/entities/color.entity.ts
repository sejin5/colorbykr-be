import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { ColorLabel } from './color-label.entity';

@Entity('colors')
export class Color {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true })
  hex: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  code: number;

  @Column({ nullable: true })
  rgb: string | null;

  @Column()
  name: string;

  @OneToMany(() => ColorLabel, (label) => label.color, {
    cascade: true,
  })
  labels: ColorLabel[];
}
