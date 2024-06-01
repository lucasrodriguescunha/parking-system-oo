// Interface que define a estrutura de um veículo
export interface IVehicle {
  ownerName: string; // Nome do proprietário do veículo
  vehiclePlate: string; // Placa do veículo
  entryTime: Date; // Horário de entrada do veículo
  exitTime?: Date; // Horário de saída do veículo (opcional)

  // Método para definir o horário de saída do veículo
  setExitTime(exitTime: Date): void;

  // Método para calcular a duração do estacionamento do veículo
  calculateParkingDuration(): number;

}
