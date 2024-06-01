import { VacancyType } from "../ParkingSpot/IParkingSpot"; // Importa a interface IParkingSpot e o tipo VacancyType
import { ParkingSpot } from "../ParkingSpot/ParkingSpot"; // Importa a classe ParkingSpot
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
}
