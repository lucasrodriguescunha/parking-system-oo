import { IParkingSpot, VacancyType } from "../ParkingSpot/IParkingSpot"; // Importa a interface IParkingSpot e o tipo VacancyType
import { ParkingSpot } from "../ParkingSpot/ParkingSpot"; // Importa a classe ParkingSpot
import { Vehicle } from "../Vehicle/Vehicle"; // Importa a classe Vehicle
import { IParking } from "./IParking"; // Importa a interface IParking

// Classe que implementa a interface ParkingSpot
export class Parking implements IParking {
  totalVacancies: number; // Número total de vagas no estacionamento
  availableVacancies: number; // Número de vagas disponíveis no estacionamento
  private spots: ParkingSpot[]; // Array de objetos ParkingSpot representando as vagas do estacionamento

  constructor(totalVacancies: number) {
    this.totalVacancies = totalVacancies; // Inicializa o número total de vagas
    this.availableVacancies = totalVacancies; // Inicializa o número de vagas disponíveis como o total inicial
    this.spots = []; // Inicializa o array de vagas

    // Inicializando vagas de estacionamento (assumindo 50% carros e 50% motos)
    for (let i = 0; i < totalVacancies; i++) {
      const type =
        i < totalVacancies / 2 ? VacancyType.Car : VacancyType.Motorcycle; // Determina o tipo de vaga com base na posição no array
      this.spots.push(new ParkingSpot(i + 1, type, true)); // Adiciona um novo objeto ParkingSpot ao array de vagas
    }
  }

  // Método para encontrar uma vaga disponível
  findAvailableVacancy(): IParkingSpot | null {
    return this.spots.find((spot) => spot.isAvailable) || null; // Retorna a primeira vaga disponível ou null se não houver
  }

  // Método para estacionar um veículo no estacionamento
  parkVehicle(vehicle: Vehicle, vacancyType: VacancyType): IParkingSpot | null {
    const availableSpot = this.spots.find(
      (spot) => spot.isAvailable && spot.vacancyType === vacancyType
    ); // Encontra uma vaga disponível do tipo especificado

    if (availableSpot) {
      // Se houver uma vaga disponível
      availableSpot.designateVehicle(vehicle); // Atribui o veículo à vaga
      this.availableVacancies--; // Decrementa o número de vagas disponíveis
      return availableSpot; // Retorna a vaga atribuída
    }
    return null; // Retorna null se não houver vaga disponível do tipo especificado
  }

  // Método para liberar um veículo de uma vaga no estacionamento
  releaseVehicleFromSpot(spotId: number): void {
    const spot = this.spots.find((spot) => spot.idVacancy === spotId); // Encontra a vaga pelo ID

    if (spot && !spot.isAvailable) {
      // Se a vaga existe e não está disponível
      spot.releaseVehicle; // Libera o veículo da vaga
      this.availableVacancies++; // Incrementa o número de vagas disponíveis
    } else {
      throw new Error("Vaga não encontrada ou já está disponível;"); // Lança um erro se a vaga não for encontrada ou já estiver disponível
    }
  }
}
