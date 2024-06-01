import { Receipt } from "./Payment"; // Importa a classe Receipt do módulo Payment

// Enumeração para os métodos de pagamento disponíveis
export enum PaymentMethod {
  Money = "Dinheiro em espécie", // Pagamento em dinheiro
  Card = "Cartão", // Pagamento com cartão
  Pix = "Pix", // Pagamento via Pix
}

// Definição da interface IPayment
export interface IPayment {
  idPayment: string; // Identificador único do pagamento
  valuePayment: number // Valor do pagamento
  paymentMethod: PaymentMethod; // Método de pagamento utilizado

  // Método para processar o pagamento e gerar um recibo
  processPayment(): Receipt;
}
