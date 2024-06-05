// Importa a interface IParkingSpot e a enumeração VacancyType do módulo IParkingSpot
import { IParkingSpot, VacancyType } from "./IParkingSpot";
// Importa a classe Vehicle do módulo Vehicle
import { Vehicle } from "../Vehicle/Vehicle";

// Define uma classe chamada ParkingSpot que implementa a interface IParkingSpot
export class ParkingSpot implements IParkingSpot {
  // Propriedade que armazena o identificador único da vaga
  idVacancy: number;

  // Propriedade que define o tipo da vaga (Carro ou Motocicleta)
  vacancyType: VacancyType;

  // Propriedade que indica se a vaga está disponível
  isAvailable: boolean;

  // Propriedade que armazena o veículo estacionado na vaga, se houver
  vehicle: Vehicle | null = null;

  // Construtor da classe ParkingSpot que inicializa as propriedades da vaga
  constructor(
    idVacancy: number,
    vacancyType: VacancyType,
    isAvailable: boolean
  ) {
    this.idVacancy = idVacancy;
    this.vacancyType = vacancyType;
    this.isAvailable = isAvailable;
  }

  // Método que designa um veículo à vaga
  // Retorna o veículo se a operação for bem-sucedida, ou null se não for
  designateVehicle(vehicle: Vehicle): Vehicle | null {
    // Verifica se a vaga está disponível
    if (this.isAvailable) {
      // Atribui o veículo à vaga e marca a vaga como ocupada
      this.vehicle = vehicle;
      this.isAvailable = false;
      return vehicle;
    }
    // Retorna null se a vaga não estiver disponível
    return null;
  }

  // Método que libera a vaga, removendo o veículo dela
  releaseVehicle(): void {
    // Verifica se há um veículo estacionado na vaga
    if (this.vehicle !== null) {
      // Remove o veículo da vaga e marca a vaga como disponível
      this.vehicle = null;
      this.isAvailable = true;
    } else {
      // Lança um erro se não houver veículo para liberar
      throw new Error("No vehicle to release.");
    }
  }
}
