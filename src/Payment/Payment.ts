// Payment.ts
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

    // Define the rate based on the vehicle type and duration
    if (duration >= 24) {
      rate = vehicle.vehicleType === VacancyType.Car ? 5.00 : 2.50;
    } else {
      rate = 5.00; // Default hourly rate
    }

    if (duration <= 1) {
      if (vehicle.vehicleType === VacancyType.Car) {
        rate = 5.00;
      } else if (vehicle.vehicleType === VacancyType.Motorcycle) {
        rate = 2.50;
      }
    }

    this.valuePayment = duration * rate;

    return new Receipt(this.idPayment, this.paymentMethod, this.valuePayment);
  }
}
