import { IVehicle } from "./IVehicle";

// Classe Vehicle que implementa a interface IVehicle
export class Vehicle implements IVehicle {
  // Atributo para armazenar o nome do proprietário do veículo
  public ownerName: string;
  // Atributo para armazenar a placa do veículo
  public vehiclePlate: string;
  // Atributo para armazenar o horário de entrada no estacionamento
  public entryTime: Date;
  // Atributo opcional para armazenar o horário de saída do estacionamento
  public exitTime?: Date;
  public licensePlate: any;

  // Construtor para inicializar os atributos do veículo
  constructor(ownerName: string, vehiclePlate: string, entryTime: Date) {
    this.ownerName = ownerName;
    this.vehiclePlate = vehiclePlate;
    this.entryTime = entryTime;
  }

  // Funcões

  // Método para definir o horário de saída
  setExitTime(exitTime: Date): void {
    this.exitTime = exitTime;
  }

  // Método para calcular a duração do estacionamento em horas
  calculateParkingDuration(): number {
    if (!this.exitTime) {
      throw new Error("Hora de saída não definida.");
    }
    // Calcula a diferença em milissegundos e converte para horas
    const durationInMilliseconds =
      this.exitTime.getTime() - this.entryTime.getTime();
    const durationInHours = durationInMilliseconds / (1000 * 60 * 60);
    return Math.ceil(durationInHours); // Arredonda para cima para considerar frações de hora como hora completa
  }

  // Método para obter a tarifa do estacionamento baseado na duração
  getParkingFee(): number {
    const hourlyRate = 5; // Tarifa por hora
    const duration = this.calculateParkingDuration();
    return duration * hourlyRate;
  }
}
