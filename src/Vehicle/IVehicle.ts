// Interface que define a estrutura de um veículo
export interface IVehicle {
  ownerName: string; // Nome do proprietário
  vehiclePlate: string; // Placa do veículo
  entryTime: Date; // Hora de entrada
  exitTime?: Date; // Hora de saída

  setExitTime(exitTime: Date): void; // Definir horário de saída
  calculateParkingDuration(): number; // Calcular tempo de duração
  getParkingFee(): number; // Obter taxa de estacionamento
}
