import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PricingConfig } from './pricing.entity';

@Injectable()
export class PricingService {
  constructor(
    @InjectRepository(PricingConfig)
    private readonly pricingRepo: Repository<PricingConfig>,
  ) {}

  async updatePricing(data: {
    ratePerUnit: number;
    vatPercentage: number;
    serviceCharge: number;
  }) {
    const pricing = this.pricingRepo.create(data);
    return this.pricingRepo.save(pricing);
  }

  async getLatestPricing(): Promise<PricingConfig | null> {
  const result = await this.pricingRepo.find({
    order: { updatedAt: 'DESC' },
    take: 1,
  });

  return result[0] ?? null;
}

}
