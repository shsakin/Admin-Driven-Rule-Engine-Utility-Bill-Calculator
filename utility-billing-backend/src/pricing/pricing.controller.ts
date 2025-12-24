import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { PricingService } from './pricing.service';
import { UpdatePricingDto } from './pricing.dto';
import { AdminGuard } from '../common/admin.guard';

@Controller('pricing')
export class PricingController {
  constructor(private service: PricingService) {}
 
  @UseGuards(AdminGuard)
  @Get('verify-admin')
  verifyAdmin() {
    return { success: true };
  }

  @UseGuards(AdminGuard)
  @Post()
  updatePricing(@Body() dto: UpdatePricingDto) {
    return this.service.updatePricing(dto);
  }
}

