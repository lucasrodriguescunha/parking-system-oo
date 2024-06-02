import { Vehicle } from "../Vehicle/Vehicle";

export class Parking {
  private totalVacancies: number;
  private parkedVehicles: Vehicle[] = [];

  constructor(totalVacancies: number) {
    this.totalVacancies = totalVacancies;
  }

  // Retorna a quantidade de vagas disponíveis
  get availableVacancies(): number {
    return this.totalVacancies - this.parkedVehicles.length;
  }

  // Estaciona um veículo
  parkVehicle(vehicle: Vehicle): void {
    if (this.availableVacancies > 0) {
      this.parkedVehicles.push(vehicle);
      console.log(`Veículo estacionado. Vagas disponíveis: ${this.availableVacancies}`);
    } else {
      throw new Error("Não há vagas disponíveis.");
    }
  }

  // Libera um veículo
  releaseVehicle(vehicle: Vehicle): void {
    const index = this.parkedVehicles.indexOf(vehicle);
    if (index > -1) {
      this.parkedVehicles.splice(index, 1);
      console.log(`Veículo liberado. Vagas disponíveis atualizadas: ${this.availableVacancies}`);
    } else {
      throw new Error("Veículo não encontrado no estacionamento.");
    }
  }
}
