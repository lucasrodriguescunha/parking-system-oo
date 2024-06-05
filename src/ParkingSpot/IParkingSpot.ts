// Importa a classe Vehicle do módulo Vehicle
import { Vehicle } from "../Vehicle/Vehicle";

// Enumeração que define os tipos de vagas no estacionamento
export enum VacancyType {
  Car = "Carro", // Vaga para carros
  Motorcycle = "Motocicleta", // Vaga para motocicletas
}

// Interface que define a estrutura de um ponto de estacionamento (vaga)
export interface IParkingSpot {
  // Identificador único da vaga
  idVacancy: number;

  // Tipo da vaga, que pode ser Carro ou Motocicleta
  vacancyType: VacancyType;

  // Indica se a vaga está disponível
  isAvailable: boolean;

  // Método para designar um veículo à vaga
  // Retorna o veículo se a operação for bem-sucedida, ou null se não for
  designateVehicle(vehicle: Vehicle): Vehicle | null;

  // Método para liberar a vaga, removendo o veículo dela
  releaseVehicle(): void;
}
