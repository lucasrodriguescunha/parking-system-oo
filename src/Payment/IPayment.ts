// Importa a classe Vehicle do módulo Vehicle
import { Vehicle } from "../Vehicle/Vehicle";
// Importa a classe Receipt do módulo Receipt
import { Receipt } from "./Receipt";

// Enumeração que define os métodos de pagamento disponíveis
export enum PaymentMethod {
  Money = "Dinheiro em espécie", // Pagamento em dinheiro
  Card = "Cartão",               // Pagamento com cartão
  Pix = "Pix"                    // Pagamento via Pix
}

// Interface que define a estrutura de um pagamento
export interface IPayment {
  // Identificador único do pagamento
  idPayment: string;

  // Valor do pagamento
  valuePayment: number;

  // Método de pagamento utilizado
  paymentMethod: PaymentMethod;

  // Método que processa o pagamento de um veículo
  // Retorna um recibo após o pagamento ser processado
  processPayment(vehicle: Vehicle): Receipt;
}
