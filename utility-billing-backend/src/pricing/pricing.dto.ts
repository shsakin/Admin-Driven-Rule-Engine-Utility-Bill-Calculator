import { IsPositive, Min, Max } from 'class-validator';

export class UpdatePricingDto {
  @IsPositive()
  ratePerUnit: number;

  @Min(0)
  @Max(100)
  vatPercentage: number;

  @IsPositive()
  serviceCharge: number;
}
