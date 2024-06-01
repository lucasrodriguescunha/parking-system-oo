import { IVehicle } from "./IVehicle"; // Importa a interface IVehicle

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

  // Construtor para inicializar os atributos do veículo
  constructor(ownerName: string, vehiclePlate: string, entryTime: Date) {
    this.ownerName = ownerName; // Inicializa o nome do proprietário
    this.vehiclePlate = vehiclePlate; // Inicializa a placa do veículo
    this.entryTime = entryTime; // Inicializa o horário de entrada
  }

  // Método para definir o horário de saída do veículo
  setExitTime(exitTime: Date): void {
    this.exitTime = exitTime; // Define o horário de saída
  }

  // Método para calcular a duração do estacionamento do veículo em horas
  calculateParkingDuration(): number {
    if (!this.exitTime) {
      // Se o horário de saída não estiver definido
      throw new Error("Hora de saída não definida."); // Lança um erro
    }
    // Calcula a diferença em milissegundos e converte para horas
    const durationInMilliseconds =
      this.exitTime.getTime() - this.entryTime.getTime();
    const durationInHours = durationInMilliseconds / (1000 * 60 * 60);
    return Math.ceil(durationInHours); // Arredonda para cima para considerar frações de hora como hora completa
  }

  // Método para obter a taxa de estacionamento do veículo com base na duração
  getParkingFee(): number {
    const hourlyRate = 5; // Taxa por hora
    const duration = this.calculateParkingDuration(); // Calcula a duração do estacionamento
    return duration * hourlyRate; // Retorna a taxa total de estacionamento
  }
}
