import { IVehicle } from "./IVehicle";

export class Vehicle implements IVehicle {
  public ownerName: string;
  public vehiclePlate: string;
  public entryTime: Date;
  public exitTime?: Date;
  public vehicleType: string;

  constructor(ownerName: string, vehiclePlate: string, vehicleType: string, entryTime: Date) {
    this.ownerName = ownerName;
    this.vehiclePlate = vehiclePlate;
    this.entryTime = entryTime;
    this.vehicleType = vehicleType;
  }

  setExitTime(exitTime: Date): void {
    this.exitTime = exitTime;
  }

  calculateParkingDuration(): number {
    if (!this.exitTime) {
      throw new Error("Exit time not set.");
    }
    const durationInMilliseconds = this.exitTime.getTime() - this.entryTime.getTime();
    const durationInHours = durationInMilliseconds / (1000 * 60 * 60);
    return Math.ceil(durationInHours);
  }
}
