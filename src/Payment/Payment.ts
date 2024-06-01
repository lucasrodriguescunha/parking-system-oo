import { PaymentMethod } from "./IPayment";

// Definição da classe Receipt
export class Receipt {
    printReceipt() {
      throw new Error("Método não implementado.");
    }
    constructor(
      public idPayment: string,
      public paymentMethod: PaymentMethod,
    ) {}
  }
  