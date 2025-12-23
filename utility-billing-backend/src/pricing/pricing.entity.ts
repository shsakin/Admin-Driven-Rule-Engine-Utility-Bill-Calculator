import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn } from 'typeorm';

@Entity()
export class PricingConfig {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal')
  ratePerUnit: number;

  @Column('decimal')
  vatPercentage: number;

  @Column('decimal')
  serviceCharge: number;

  @Column({ default: true })
  isActive: boolean;

  @UpdateDateColumn()
  updatedAt: Date;
}
