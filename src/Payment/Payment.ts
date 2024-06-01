import { PaymentMethod } from "./IPayment"; // Importa a enumeração PaymentMethod do módulo IPayment

// Definição da classe Receipt
export class Receipt {
  // Método para imprimir o recibo (não implementado neste exemplo)
  printReceipt() {
    throw new Error("Método não implementado."); // Lança um erro indicando que o método não foi implementado
  }
  
  // Construtor da classe Receipt
  constructor(
    public idPayment: string, // Identificador único do pagamento
    public paymentMethod: PaymentMethod, // Método de pagamento utilizado
  ) {}
}
