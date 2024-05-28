import { IVehicle } from "./Vehicle/IVehicle";
import { Vehicle } from "./Vehicle/Vehicle";
import { ParkingSpot } from "./ParkingSpot/ParkingSpot";
import { VacancyType } from "./ParkingSpot/IParkingSpot";
import { Parking } from "./Parking/Parking";

// Exemplo de uso da classe Parking e Vehicle com o objeto myCar

const parking = new Parking(100); // Cria um novo estacionamento com 100 vagas

console.log("Bem-vindo ao Estacionamento!");
console.log(
  "Por favor, estacione com cuidado e aproveite sua estadia conosco."
);

// Imprime a quantidade de vagas no estacionamento antes do carro chegar
console.log(`\nTotal de vagas no estacionamento: ${parking.totalVacancies}`);

// Imprime os dados
console.log("\nDados obtidos:");

// Cria um novo veículo
const myCar = new Vehicle(
  "Lucas Rodrigues Cunha",
  "XYZ-1234",
  new Date("2023-05-25T08:00:00") // Horário de entrada
);
myCar.setExitTime(new Date("2023-05-25T12:30:00")); // Horário de saída
// console.log(myCar); // Imprime todo o objeto myCar

// Imprime apenas os dados necessários
console.log(`Nome do cliente: ${myCar.ownerName}`);
console.log(`\nPlaca do veículo: ${myCar.vehiclePlate}`);
console.log(`\nHora de entrada no estacionamento: ${myCar.entryTime}`);
console.log(`\nHora de saída do estacionamento: ${myCar.exitTime}`);

// TRATAR OS DADOS ACIMA COMO OS DE BAIXO, COLOCAR UM TEXTO EXPLICATIVO

try {
  const duration = myCar.calculateParkingDuration(); // Calcula a duração no estacionamento
  const fee = myCar.getParkingFee(); // Calcula o valor do estacionamento
  console.log(`\nDuração: ${duration} hours`);
  console.log(`\nValor: R$ ${fee.toFixed(2)}`);
} catch (error) {
  console.error("\nErro na execução. Observar atentamente o código.");
}

// Encontra uma vaga disponível e estaciona o veículo
const spot = parking.parkVehicle(myCar, VacancyType.Car);
console.log("\nVocê ocupou uma vaga no estacionamento");

// Imprime a quantidade de vagas no estacionamento depois do carro chegar
console.log(`\nVagas disponíveis no momento: [ ${parking.availableVacancies} ]`);

if (spot) {
  console.log(`\nVeículo estacionado na vaga [ ${spot.idVacancy} ]`);
} else {
  console.log("\nNenhuma vaga disponível.");
}

// Ver as vagas
// console.log(parking);

// Libera a vaga
if (spot) {
  parking.releaseVehicleFromSpot(spot.idVacancy);
  console.log(`\nVeículo liberado da vaga [ ${spot.idVacancy} ]`);
}
