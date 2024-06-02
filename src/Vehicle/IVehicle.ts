export interface IVehicle {
  ownerName: string;
  vehiclePlate: string;
  entryTime: Date;
  exitTime?: Date;
  vehicleType: string;

  setExitTime(exitTime: Date): void;
  calculateParkingDuration(): number;
}
