import { Vehicle } from "../Vehicle/Vehicle";

export enum VacancyType {
  Car = "Carro",
  Motorcycle = "Motocicleta",
}

export interface IParkingSpot {
  idVacancy: number;
  vacancyType: VacancyType;
  isAvailable: boolean;

  designateVehicle(vehicle: Vehicle): Vehicle | null;
  releaseVehicle(): void;
}
