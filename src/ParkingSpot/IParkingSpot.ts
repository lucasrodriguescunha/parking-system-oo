import { Vehicle } from "../Vehicle/Vehicle";  // Importa a classe Vehicle

// Enumeração para os tipos de vaga
export enum VacancyType {
  Car = "car", // Tipo de vaga para carro
  Motorcycle = "motorcycle", // Tipo de vaga para motocicleta
}

// Interface que define a estrutura de uma vaga de estacionamento
export interface IParkingSpot {
  idVacancy: number; // ID da vaga
  vacancyType: VacancyType; // Tipo de vaga: carro, motocicleta
  isAvailable: boolean; // Vaga disponível?

  // Método para designar um veículo à vaga
  designateVehicle(vehicle: Vehicle): Vehicle | null;

  // Método para liberar um veículo da vaga
  releaseVehicle(): void;
}
