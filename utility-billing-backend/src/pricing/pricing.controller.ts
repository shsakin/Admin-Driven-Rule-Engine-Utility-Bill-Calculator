import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { PricingService } from './pricing.service';
import { UpdatePricingDto } from './pricing.dto';
import { AdminGuard } from '../common/admin.guard';

@Controller('pricing')
export class PricingController {
  constructor(private service: PricingService) {}

  @UseGuards(AdminGuard)
  @Post()
  updatePricing(@Body() dto: UpdatePricingDto) {
    return this.service.updatePricing(dto);
  }
}
