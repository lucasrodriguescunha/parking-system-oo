// Receipt.ts
import { PaymentMethod } from "./IPayment";

export class Receipt {
  constructor(
    public idPayment: string,
    public paymentMethod: PaymentMethod,
    public valuePayment: number
  ) {}

  printReceipt(): void {
    console.log(`Receipt: ${this.idPayment} - Method: ${this.paymentMethod} - Value: ${this.valuePayment}`);
  }
}
