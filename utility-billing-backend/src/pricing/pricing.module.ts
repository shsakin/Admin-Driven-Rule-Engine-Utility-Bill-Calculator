import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PricingConfig } from './pricing.entity';
import { PricingService } from './pricing.service';
import { PricingController } from './pricing.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PricingConfig])],
  providers: [PricingService],
  controllers: [PricingController],
  exports: [PricingService],
})
export class PricingModule {}
