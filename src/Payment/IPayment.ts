import { Receipt } from "./Payment";

export enum PaymentMethod {
  Money = "Dinheiro em espécie", // Dinheiro em espécie
  Card = "Cartão", // Cartão
  Pix = "Pix", // pix
}

// Definição da interface IPayment
export interface IPayment {
  idPayment: string; // Cada pagamento deve gerar um ID, ex: 1o usuário, id 0
  // 2o usuário, id pagamento 1
  paymentMethod: PaymentMethod; // Método de pagamento

  processPayment(): Receipt; // Gerar recibo com o id de pagamento, método de pagamento e data de pagamento
}
