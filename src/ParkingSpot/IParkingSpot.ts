import { Vehicle } from "../Vehicle/Vehicle";

// Enumeração para os tipos de vaga
export enum VacancyType {
  Car = "car",
  Motorcycle = "motorcycle",
}

// Interface que define a estrutura de uma vaga de estacionamento
export interface IParkingSpot {
  idVacancy: string; // ID da vaga
  vacancyType: VacancyType; // Tipo de vaga: carro, moto
  isAvailable: boolean; // Vaga disponível?

  designateVehicle(vehicle: Vehicle): Vehicle | null; // Designar veículo
  releaseVehicle(): void; // Liberar veículo
}
