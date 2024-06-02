import { Vehicle } from "./Vehicle/Vehicle";
import { Parking } from "./Parking/Parking";
import { PaymentMethod } from "./Payment/IPayment";
import { Payment } from "./Payment/Payment";
import { VacancyType } from "./ParkingSpot/IParkingSpot";

// Cria um novo estacionamento com 10 vagas
const parking = new Parking(10);

// Mensagem de boas-vindas
console.log(
  ",________________________________________,\n" +
    "|                                        |\n" +
    "|      BOAS-VINDAS AO ESTACIONAMENTO     |\n" +
    "|________________________________________|"
);

console.log("\nIndependente se for carro ou moto.");
console.log("---> Até 15min          | Sem cobrança");
console.log("---> De 15min até 30min | R$ 1,50");
console.log("---> De 30min a 1h      | R$ 2,00");
console.log("---> De 1h a 2h         | R$ 3,50");
console.log("---> De 2h a 3h         | R$ 5,00");
console.log("---> De 3h a 4h         | R$ 6,50");
console.log("---> De 4h a 5h         | R$ 8,00");
console.log("---> De 5h a 6h         | R$ 9,50");
console.log("---> De 6h a 24h        | R$ 11,00");
console.log("---> Mensalista         | R$ 250.00 ");

console.log(
  "\nPor favor, estacione com cuidado e aproveite sua estadia conosco.\n"
);

// Cria um novo veículo - João Silva
const myCar = new Vehicle(
  "João Silva",
  "GQZ3444",
  VacancyType.Car,
  new Date("2024-06-02T08:00:00"),
  new Date("2024-06-02T12:30:00")
);

try {
  console.log(`---> Nome do cliente: ${myCar.ownerName}`);
  console.log(`---> Placa do veículo: ${myCar.vehiclePlate}`);
  console.log(`---> Hora de entrada no estacionamento: ${myCar.entryTime}`);
  console.log(`---> Hora de saída do estacionamento: ${myCar.exitTime}`);

  // Calcula a duração do estacionamento
  const duration = myCar.calculateParkingDuration();
  console.log(
    `---> Tempo que você ficou no estacionamento: ${duration.hours} horas e ${duration.minutes} minutos\n`
  );

  // Encontra uma vaga disponível e estaciona o veículo
  parking.parkVehicle(myCar);

  // Processa o pagamento
  const payment = new Payment("P001", 0, PaymentMethod.Money); // Inicializando com valor 0, será calculado no método
  const receipt = payment.processPayment(myCar);
  receipt.printReceipt();

  // Libera a vaga
  parking.releaseVehicle(myCar);

} catch (error) {
  console.error("\nErro na execução. Observar atentamente o código.", error);
}


// Espaço entre os usuários
console.log("\n\n\n\n");


// Mensagem de boas-vindas
console.log(
  ",________________________________________,\n" +
    "|                                        |\n" +
    "|      BOAS-VINDAS AO ESTACIONAMENTO     |\n" +
    "|________________________________________|"
);

console.log("\nIndependente se for carro ou moto.");
console.log("---> Até 15min          | Sem cobrança");
console.log("---> De 15min até 30min | R$ 1,50");
console.log("---> De 30min a 1h      | R$ 2,00");
console.log("---> De 1h a 2h         | R$ 3,50");
console.log("---> De 2h a 3h         | R$ 5,00");
console.log("---> De 3h a 4h         | R$ 6,50");
console.log("---> De 4h a 5h         | R$ 8,00");
console.log("---> De 5h a 6h         | R$ 9,50");
console.log("---> De 6h a 24h        | R$ 11,00");
console.log("---> Mensalista         | R$ 250.00 ");

console.log(
  "\nPor favor, estacione com cuidado e aproveite sua estadia conosco.\n"
);

// Cria um novo veículo - Maria Souza
const myCar2 = new Vehicle(
  "Maria Souza",
  "ABC1234",
  VacancyType.Car,
  new Date("2024-06-02T09:00:00"),
  new Date("2024-06-02T13:30:00")
);

try {
  console.log(`---> Nome do cliente: ${myCar2.ownerName}`);
  console.log(`---> Placa do veículo: ${myCar2.vehiclePlate}`);
  console.log(`---> Hora de entrada no estacionamento: ${myCar2.entryTime}`);
  console.log(`---> Hora de saída do estacionamento: ${myCar2.exitTime}`);

  // Calcula a duração do estacionamento
  const duration2 = myCar2.calculateParkingDuration();
  console.log(
    `---> Tempo que você ficou no estacionamento: ${duration2.hours} horas e ${duration2.minutes} minutos\n`
  );

  // Encontra uma vaga disponível e estaciona o veículo
  parking.parkVehicle(myCar2);

  // Processa o pagamento
  const payment2 = new Payment("P002", 0, PaymentMethod.Money); // Inicializando com valor 0, será calculado no método
  const receipt2 = payment2.processPayment(myCar2);
  receipt2.printReceipt();

  // Libera a vaga
  parking.releaseVehicle(myCar2);
} catch (error) {
  console.error("\nErro na execução. Observar atentamente o código.", error);
}
