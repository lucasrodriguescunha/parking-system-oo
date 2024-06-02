import { IParkingSpot, VacancyType } from "./IParkingSpot";
import { Vehicle } from "../Vehicle/Vehicle";

export class ParkingSpot implements IParkingSpot {
  idVacancy: number;
  vacancyType: VacancyType;
  isAvailable: boolean;
  vehicle: Vehicle | null = null;

  constructor(idVacancy: number, vacancyType: VacancyType, isAvailable: boolean) {
    this.idVacancy = idVacancy;
    this.vacancyType = vacancyType;
    this.isAvailable = isAvailable;
  }

  designateVehicle(vehicle: Vehicle): Vehicle | null {
    if (this.isAvailable) {
      this.vehicle = vehicle;
      this.isAvailable = false;
      return vehicle;
    }
    return null;
  }

  releaseVehicle(): void {
    if (this.vehicle !== null) {
      this.vehicle = null;
      this.isAvailable = true;
    } else {
      throw new Error("No vehicle to release.");
    }
  }
}
