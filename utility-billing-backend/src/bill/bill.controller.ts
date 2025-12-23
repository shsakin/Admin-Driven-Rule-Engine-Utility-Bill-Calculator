import { Controller, Post, Body, Res } from '@nestjs/common';
import { BillService } from './bill.service';
import { CalculateBillDto } from './bill.dto';
import type { Response } from 'express';
import * as PDFDocument from 'pdfkit';

@Controller('bill')
export class BillController {
  constructor(private service: BillService) {}

  @Post('calculate')
  calculate(@Body() dto: CalculateBillDto) {
    return this.service.calculate(dto.units);
  }

  @Post('pdf')
  async generatePdf(
    @Body() dto: CalculateBillDto,
    @Res() res: Response,
  ) {
    const data = await this.service.calculate(dto.units);

    const doc = new PDFDocument();
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=bill.pdf');

    doc.pipe(res);
    doc.fontSize(16).text('Utility Bill', { underline: true });
    doc.moveDown();

    Object.entries(data).forEach(([key, value]) => {
      doc.text(`${key}: ${value}`);
    });

    doc.end();
  }
}