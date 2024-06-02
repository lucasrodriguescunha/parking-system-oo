import { IPayment, PaymentMethod } from "./IPayment";
import { Receipt } from "./Receipt";
import { Vehicle } from "../Vehicle/Vehicle";
import { VacancyType } from "../ParkingSpot/IParkingSpot";

export class Payment implements IPayment {
  constructor(
    public idPayment: string,
    public valuePayment: number,
    public paymentMethod: PaymentMethod
  ) {}

  processPayment(vehicle: Vehicle): Receipt {
    const duration = vehicle.calculateParkingDuration();
    let rate: number;

    const durationInMinutes = (duration.hours * 60) + duration.minutes;

    if (durationInMinutes <= 15) {
      rate = 0; // Sem cobrança
    } else if (durationInMinutes <= 30) {
      rate = 1.50;
    } else if (durationInMinutes <= 60) {
      rate = 2.00;
    } else if (durationInMinutes <= 120) {
      rate = 3.50;
    } else if (durationInMinutes <= 180) {
      rate = 5.00;
    } else if (durationInMinutes <= 240) {
      rate = 6.50;
    } else if (durationInMinutes <= 300) {
      rate = 8.00;
    } else if (durationInMinutes <= 360) {
      rate = 9.50;
    } else if (durationInMinutes <= 1440) {
      rate = 11.00;
    } else {
      rate = 250.00; // Mensalista
    }

    this.valuePayment = rate;

    return new Receipt(this.idPayment, this.paymentMethod, this.valuePayment);
  }
}
``
