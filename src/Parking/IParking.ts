import { IParkingSpot, VacancyType } from "../ParkingSpot/IParkingSpot";
import { Vehicle } from "../Vehicle/Vehicle";

// Interface que define a estrutura do estacionamento
export interface IParking {
  totalVacancies: number; // Número total de vagas no estacionamento
  availableVacancies: number; // Número de vagas disponível no estacionamento

  findAvailableVacancy(): IParkingSpot | null; // Encontrar vaga disponível
  parkVehicle(vehicle: Vehicle, vacancyType: VacancyType): IParkingSpot | null;
  releaseVehicleFromSpot(spotId: string): void; // Liberar veículo de uma vaga
}
