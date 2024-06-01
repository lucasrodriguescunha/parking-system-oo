import { Vehicle } from "../Vehicle/Vehicle"; // Importa a classe Vehicle
import { IParkingSpot, VacancyType } from "./IParkingSpot"; // Importa a interface IParkingSpot e o tipo VacancyType

export class ParkingSpot implements IParkingSpot {
  idVacancy: number; // ID da vaga
  vacancyType: VacancyType; // Tipo de vaga: carro, moto
  isAvailable: boolean; // Vaga disponível?
  vehicle: Vehicle | null = null; // Veículo designado à vaga (null se a vaga estiver disponível)

  constructor(
    idVacancy: number, // ID da vaga
    vacancyType: VacancyType, // Tipo de vaga: carro, moto
    isAvailable: boolean // Vaga disponível?
  ) {
    this.idVacancy = idVacancy; // Inicializa o ID da vaga
    this.vacancyType = vacancyType; // Inicializa o tipo de vaga
    this.isAvailable = isAvailable; // Inicializa a disponibilidade da vaga
  }

  // Método para designar um veículo à vaga
  designateVehicle(vehicle: Vehicle): Vehicle | null {
    if (this.isAvailable) { // Se a vaga estiver disponível
      this.vehicle = vehicle; // Designa o veículo à vaga
      this.isAvailable = false; // Define a vaga como ocupada
      return vehicle; // Retorna o veículo designado
    }
    return null; // Retorna null se a vaga não estiver disponível
  }

  // Método para liberar um veículo da vaga
  releaseVehicle(): void {
    if (this.vehicle !== null) { // Se houver um veículo designado à vaga
      this.vehicle = null; // Libera o veículo
      this.isAvailable = true; // Define a vaga como disponível
    } else {
      throw new Error("Nenhum veículo para liberar."); // Lança um erro se não houver veículo designado à vaga
    }
  }
}
