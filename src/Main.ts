import { Vehicle } from "./Vehicle/Vehicle";
import { Parking } from "./Parking/Parking";
import { PaymentMethod } from "./Payment/IPayment";
import { Payment } from "./Payment/Payment";
import { VacancyType } from "./ParkingSpot/IParkingSpot";

// Cria um novo estacionamento com 100 vagas
const parking = new Parking(100);

// Mensagem de boas-vindas
console.log(
    ",________________________________________,\n" +
    "|                                        |\n" +
    "|      BEM-VINDO(A) AO ESTACIONAMENTO    |\n" +
    "|________________________________________|"
);

console.log("\nDiária: ");
console.log("--> Carro: R$ 5.00");
console.log("--> Moto: R$ 2.50");

console.log("\nHorista: ");
console.log("--> 30m: R$2.50");
console.log("--> 1h: R$5.00");

console.log("\nMensalista: ");
console.log("--> Mensal carro: R$50.00");
console.log("--> Mensal moto: R$25.00");

console.log(
  "\nPor favor, estacione com cuidado e aproveite sua estadia conosco.\n"
);

// Cria um novo veículo
const myCar = new Vehicle(
  "João Silva",
  "XYZ-1234",
  VacancyType.Car,
  new Date("2023-05-25T08:00:00")
);

try {
  console.log(`--> Nome do cliente: ${myCar.ownerName}`);
  console.log(`--> Placa do veículo: ${myCar.vehiclePlate}`);
  console.log(`--> Hora de entrada no estacionamento: ${myCar.entryTime}`);
} catch (error) {
  console.error("\nErro na execução. Observar atentamente o código.");
}

myCar.setExitTime(new Date("2023-05-25T12:30:00")); // Horário de saída

// Imprime a quantidade de vagas disponíveis no estacionamento antes do carro chegar
console.log(`Total de vagas no estacionamento: ${parking.totalVacancies}`);
console.log(`Vagas disponíveis no estacionamento: ${parking.availableVacancies}`);

// Encontra uma vaga disponível e estaciona o veículo
parking.parkVehicle(myCar);

// Processa o pagamento
const payment = new Payment("1", 0, PaymentMethod.Money); // Inicializando com valor 0, será calculado no método
const receipt = payment.processPayment(myCar);
receipt.printReceipt();

console.log(`--> Hora de saída do estacionamento: ${myCar.exitTime}`);

// Libera a vaga
parking.releaseVehicle(myCar);

// Imprime a quantidade de vagas disponíveis no estacionamento depois do carro sair
console.log(`Vagas disponíveis no estacionamento: ${parking.availableVacancies}`);
