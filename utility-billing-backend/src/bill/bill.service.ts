import { Injectable, BadRequestException } from '@nestjs/common';
import { PricingService } from '../pricing/pricing.service';

@Injectable()
export class BillService {
  constructor(private pricingService: PricingService) {}

  async calculate(units: number) {
    const config = await this.pricingService.getLatestPricing();

    if (!config) {
      throw new BadRequestException(
        'No active pricing configuration found. Please contact admin.',
      );
    }

    const ratePerUnit = Number(config.ratePerUnit);
    const vatPercentage = Number(config.vatPercentage);
    const serviceCharge = Number(config.serviceCharge);

    const subtotal = units * ratePerUnit;
    const vatAmount = subtotal * (vatPercentage / 100);
    const total = subtotal + vatAmount + serviceCharge;

    return {
      units,
      subtotal,
      vatAmount,
      serviceCharge,
      total,
    };
  }
}
