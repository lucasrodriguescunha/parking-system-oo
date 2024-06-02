import { VacancyType } from "../ParkingSpot/IParkingSpot"; // Adicione esta linha

export class Vehicle {
  constructor(
    public ownerName: string,
    public vehiclePlate: string,
    public vehicleType: VacancyType,
    public entryTime: Date,
    public exitTime: Date
  ) {}

  // Método para calcular a duração do estacionamento em horas e minutos
  calculateParkingDuration(): { hours: number, minutes: number } {
    const durationInMilliseconds = this.exitTime.getTime() - this.entryTime.getTime();
    const durationInMinutes = Math.floor(durationInMilliseconds / (1000 * 60)); // Duração em minutos
    const hours = Math.floor(durationInMinutes / 60);
    const minutes = durationInMinutes % 60;
    return { hours, minutes };
  }
}
