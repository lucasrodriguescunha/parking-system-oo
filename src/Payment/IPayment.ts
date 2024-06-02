import { Vehicle } from "../Vehicle/Vehicle";
import { Receipt } from "./Receipt";

export enum PaymentMethod {
  Money = "Dinheiro em espécie",
  Card = "Cartão",
  Pix = "Pix",
}

export interface IPayment {
  idPayment: string;
  valuePayment: number;
  paymentMethod: PaymentMethod;

  processPayment(vehicle: Vehicle): Receipt;
}
