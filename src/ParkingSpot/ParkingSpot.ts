import { Vehicle } from "../Vehicle/Vehicle";
import { IParkingSpot, VacancyType } from "./IParkingSpot";

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
    this.idVacancy = idVacancy;
    this.vacancyType = vacancyType;
    this.isAvailable = isAvailable;
  }

  // Funções
  designateVehicle(vehicle: Vehicle): Vehicle | null {
    // Designar veículo
    if (this.isAvailable) {
      this.vehicle = vehicle;
      this.isAvailable = false;
      return vehicle;
    }
    return null;
  }
  releaseVehicle(): void {
    // Liberar veículo
    if (this.vehicle !== null) {
      this.vehicle = null;
      this.isAvailable = true;
    } else {
      throw new Error("Nenhum veículo para liberar.");
    }
  }
}
