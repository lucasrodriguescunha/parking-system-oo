// Importa a classe Vehicle do módulo Vehicle
import { Vehicle } from "../Vehicle/Vehicle";

// Define uma classe chamada Parking
export class Parking {
  // Propriedade privada que representa o número total de vagas no estacionamento
  private totalVacancies: number;

  // Propriedade privada que armazena uma lista de veículos estacionados
  private parkedVehicles: Vehicle[] = [];

  // Construtor da classe Parking que inicializa o número total de vagas
  constructor(totalVacancies: number) {
    this.totalVacancies = totalVacancies;
  }

  // Método getter que retorna a quantidade de vagas disponíveis
  get availableVacancies(): number {
    return this.totalVacancies - this.parkedVehicles.length;
  }

  // Método que estaciona um veículo
  parkVehicle(vehicle: Vehicle): void {
    // Verifica se há vagas disponíveis
    if (this.availableVacancies > 0) {
      // Adiciona o veículo à lista de veículos estacionados
      this.parkedVehicles.push(vehicle);
      console.log(
        `Veículo estacionado. Vagas disponíveis: ${this.availableVacancies}`
      );
    } else {
      // Lança um erro se não houver vagas disponíveis
      throw new Error("Não há vagas disponíveis.");
    }
  }

  // Método que libera um veículo
  releaseVehicle(vehicle: Vehicle): void {
    // Encontra o índice do veículo na lista de veículos estacionados
    const index = this.parkedVehicles.indexOf(vehicle);
    if (index > -1) {
      // Remove o veículo da lista se ele for encontrado
      this.parkedVehicles.splice(index, 1);
      console.log(
        `Veículo liberado. Vagas disponíveis atualizadas: ${this.availableVacancies}`
      );
    } else {
      // Lança um erro se o veículo não for encontrado na lista
      throw new Error("Veículo não encontrado no estacionamento.");
    }
  }
}
