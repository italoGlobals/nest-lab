import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn() id: number;

  @Column(
    {
      type: 'varchar',
      length: 100
    }
  ) name: string;

  @Column(
    {
      type: 'varchar',
      length: 100,
      unique: true 
    }
  ) email: string;

  @Column(
    {
      type: 'varchar',
      length: 100
    }
  ) password: string;

  @CreateDateColumn(
    {
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP'
    }
  ) createdAt: Date;

  @UpdateDateColumn(
    {
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
      onUpdate: 'CURRENT_TIMESTAMP'
    }
  ) updatedAt: Date;
}
