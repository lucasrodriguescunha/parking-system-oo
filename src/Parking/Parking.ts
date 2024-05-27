import { IParkingSpot, VacancyType } from "../ParkingSpot/IParkingSpot";
import { ParkingSpot } from "../ParkingSpot/ParkingSpot";
import { Vehicle } from "../Vehicle/Vehicle";
import { IParking } from "./IParking";

// Classe que implementa a interface ParkingSpot
export class Parking implements IParking {
  totalVacancies: number;
  availableVacancies: number;
  private spots: ParkingSpot[];

  constructor(totalVacancies: number) {
    this.totalVacancies = totalVacancies;
    this.availableVacancies = totalVacancies;
    this.spots = [];

    // Inicializando vagas de estacionamento (assumindo 50% carros e 50% motos)
    for (let i = 0; i < totalVacancies; i++) {
      const type =
        i < totalVacancies / 2 ? VacancyType.Car : VacancyType.Motorcycle;
      this.spots.push(new ParkingSpot(i + 1, type, true));
    }
  }

  findAvailableVacancy(): IParkingSpot | null {
    return this.spots.find((spot) => spot.isAvailable) || null;
  }

  parkVehicle(vehicle: Vehicle, vacancyType: VacancyType): IParkingSpot | null {
    const availableSpot = this.spots.find(
      (spot) => spot.isAvailable && spot.vacancyType === vacancyType
    );

    if (availableSpot) {
      availableSpot.designateVehicle(vehicle);
      this.availableVacancies--;
      return availableSpot;
    }
    return null;
  }

  releaseVehicleFromSpot(spotId: number): void {
    const spot = this.spots.find((spot) => spot.idVacancy === spotId);
    if (spot && !spot.isAvailable) {
      spot.releaseVehicle;
      this.availableVacancies++;
    } else {
      throw new Error("Vaga não encontrada ou já está disponível;");
    }
  }
}
