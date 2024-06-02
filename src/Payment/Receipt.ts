import { PaymentMethod } from "./IPayment";

export class Receipt {
  constructor(
    public idPayment: string,
    public paymentMethod: PaymentMethod,
    public valuePayment: number
  ) {}

  printReceipt(): void {
    console.log(
      `,____________________________________________________,\n` +
        `|                                                   |\n` +
        `|                      RECIBO                       |\n` +
        `|___________________________________________________|\n ` +
        `\n---> ID: ${this.idPayment} \n---> Método: ${this.paymentMethod} \n---> R$ ${this.valuePayment.toFixed(2) + "\n\n\n\n" }`
    );
  }
}
