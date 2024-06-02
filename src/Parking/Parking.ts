import { IParking } from "./IParking";
import { ParkingSpot } from "../ParkingSpot/ParkingSpot";
import { VacancyType } from "../ParkingSpot/IParkingSpot";
import { Vehicle } from "../Vehicle/Vehicle";

export class Parking implements IParking {
  totalVacancies: number; 
  availableVacancies: number; 
  private spots: ParkingSpot[]; 

  constructor(totalVacancies: number) {
    this.totalVacancies = totalVacancies; 
    this.availableVacancies = totalVacancies; 
    this.spots = []; 

    for (let i = 0; i < totalVacancies; i++) {
      const type = i < totalVacancies / 2 ? VacancyType.Car : VacancyType.Motorcycle; 
      this.spots.push(new ParkingSpot(i + 1, type, true)); 
    }
  }

  findAvailableSpot(vehicleType: VacancyType): ParkingSpot | null {
    for (const spot of this.spots) {
      if (spot.isAvailable && spot.vacancyType === vehicleType) {
        return spot;
      }
    }
    return null;
  }

  parkVehicle(vehicle: Vehicle): void {
    const spot = this.findAvailableSpot(vehicle.vehicleType as VacancyType);
    if (spot) {
      spot.designateVehicle(vehicle);
      this.availableVacancies--;
    } else {
      throw new Error("No available spot for this vehicle type.");
    }
  }

  releaseVehicle(vehicle: Vehicle): void {
    for (const spot of this.spots) {
      if (spot.vehicle?.vehiclePlate === vehicle.vehiclePlate) {
        spot.releaseVehicle();
        this.availableVacancies++;
        return;
      }
    }
    throw new Error("Vehicle not found in the parking.");
  }
}
