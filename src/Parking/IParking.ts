import { IParkingSpot, VacancyType } from "../ParkingSpot/IParkingSpot"; // Importa a interface IParkingSpot e o tipo VacancyType
import { Vehicle } from "../Vehicle/Vehicle"; // Importa a classe Vehicle

// Interface que define a estrutura do estacionamento
export interface IParking {
  totalVacancies: number; // Número total de vagas no estacionamento
  availableVacancies: number; // Número de vagas disponível no estacionamento

  // Método para encontrar uma vaga disponível
  findAvailableVacancy(): IParkingSpot | null;

  // Método para estacionar um veículo no estacionamento
  parkVehicle(vehicle: Vehicle, vacancyType: VacancyType): IParkingSpot | null;

  // Método para liberar um veículo de uma vaga no estacionamento
  releaseVehicleFromSpot(spotId: number): void;
}
