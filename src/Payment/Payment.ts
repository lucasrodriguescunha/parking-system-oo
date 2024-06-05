// Importa a interface IPayment e a enumeração PaymentMethod do módulo IPayment
import { IPayment, PaymentMethod } from "./IPayment";
// Importa a classe Receipt do módulo Receipt
import { Receipt } from "./Receipt";
// Importa a classe Vehicle do módulo Vehicle
import { Vehicle } from "../Vehicle/Vehicle";
// Importa a enumeração VacancyType do módulo IParkingSpot
import { VacancyType } from "../ParkingSpot/IParkingSpot";

// Define uma classe chamada Payment que implementa a interface IPayment
export class Payment implements IPayment {
  // Construtor da classe Payment que inicializa as propriedades do pagamento
  constructor(
    public idPayment: string,
    public valuePayment: number,
    public paymentMethod: PaymentMethod
  ) {}

  // Método que processa o pagamento de um veículo e retorna um recibo
  processPayment(vehicle: Vehicle): Receipt {
    // Calcula a duração do estacionamento do veículo
    const duration = vehicle.calculateParkingDuration();
    let rate: number;

    // Converte a duração do estacionamento para minutos
    const durationInMinutes = duration.hours * 60 + duration.minutes;

    // Define a tarifa de acordo com a duração do estacionamento
    if (durationInMinutes <= 15) {
      rate = 0; // Sem cobrança
    } else if (durationInMinutes <= 30) {
      rate = 1.5;
    } else if (durationInMinutes <= 60) {
      rate = 2.0;
    } else if (durationInMinutes <= 120) {
      rate = 3.5;
    } else if (durationInMinutes <= 180) {
      rate = 5.0;
    } else if (durationInMinutes <= 240) {
      rate = 6.5;
    } else if (durationInMinutes <= 300) {
      rate = 8.0;
    } else if (durationInMinutes <= 360) {
      rate = 9.5;
    } else if (durationInMinutes <= 1440) {
      rate = 11.0;
    } else {
      rate = 250.0; // Mensalista
    }

    // Atualiza o valor do pagamento com a tarifa calculada
    this.valuePayment = rate;

    // Retorna um novo recibo com as informações do pagamento
    return new Receipt(this.idPayment, this.paymentMethod, this.valuePayment);
  }
}
