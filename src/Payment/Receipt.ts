// Importa a enumeração PaymentMethod do módulo IPayment
import { PaymentMethod } from "./IPayment";

// Define uma classe chamada Receipt
export class Receipt {
  // Construtor da classe Receipt que inicializa as propriedades do recibo
  constructor(
    public idPayment: string,        // Identificador único do pagamento
    public paymentMethod: PaymentMethod, // Método de pagamento utilizado
    public valuePayment: number      // Valor do pagamento
  ) {}

  // Método para imprimir o recibo
  printReceipt(): void {
    // Imprime os detalhes do recibo formatados no console
    console.log(
      `,____________________________________________________,\n` +
      `|                                                   |\n` +
      `|                 RECIBO A PAGAR                    |\n` +
      `|___________________________________________________|\n ` +
      `\n---> ID: ${this.idPayment} \n---> Método: ${this.paymentMethod} \n---> R$ ${this.valuePayment.toFixed(2)}`
    );
  }
}
