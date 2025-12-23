import { IsPositive } from 'class-validator';

export class CalculateBillDto {
  @IsPositive()
  units: number;
}
