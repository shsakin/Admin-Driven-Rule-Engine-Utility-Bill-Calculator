import jsPDF from 'jspdf';

type BillResult = {
  units: number;
  ratePerUnit: number;
  subtotal: number;
  vatAmount: number;
  serviceCharge: number;
  total: number;
};

export function generateBillPDF(bill: BillResult) {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text('Utility Bill', 20, 20);

  doc.setFontSize(12);
  doc.text(`Units Consumed: ${bill.units}`, 20, 40);

  doc.text(`Subtotal: ${bill.subtotal}`, 20, 70);
  doc.text(`VAT Amount: ${bill.vatAmount}`, 20, 80);
  doc.text(`Service Charge: ${bill.serviceCharge}`, 20, 90);

  doc.setFontSize(14);
  doc.text(`Total Payable: ${bill.total}`, 20, 110);

  doc.save('utility-bill.pdf');
}
