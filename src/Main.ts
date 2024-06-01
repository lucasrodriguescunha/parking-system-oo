// Importa as classes necessárias
import { Vehicle } from "./Vehicle/Vehicle";
import { ParkingSpot } from "./ParkingSpot/ParkingSpot";
import { VacancyType } from "./ParkingSpot/IParkingSpot";
import { Parking } from "./Parking/Parking";
import { IPayment, PaymentMethod } from "./Payment/IPayment";

// Cria um novo estacionamento com 100 vagas
const parking = new Parking(100);

// Mensagem de boas-vindas
console.log(
  "--------------------------------------------------------------------------------------------------------"
);
console.log("BEM-VINDO(A) AO ESTACIONAMENTO!");
console.log(
  "--------------------------------------------------------------------------------------------------------"
);

console.log("\nHorista: ")
console.log("--> 30m: R$2.50")
console.log("--> 1h: R$5.00");

console.log("\nMensalista: ")
console.log("--> Mensal: R$50.00")

console.log(
  "\n--------------------------------------------------------------------------------------------------------"
);
console.log(
  "Por favor, estacione com cuidado e aproveite sua estadia conosco."
);
console.log(
  "--------------------------------------------------------------------------------------------------------"
);

// Cria um novo veículo
const myCar = new Vehicle(
  "Lucas Rodrigues Cunha",
  "XYZ-1234",
  new Date("2023-05-25T08:00:00") // Horário de entrada
);
myCar.setExitTime(new Date("2023-05-25T12:30:00")); // Horário de saída

// Imprime a quantidade de vagas disponíveis no estacionamento antes do carro chegar
console.log(`Total de vagas no estacionamento: ${parking.totalVacancies}`);
console.log("Você ocupou uma vaga no estacionamento");

// Encontra uma vaga disponível e estaciona o veículo
const spot = parking.parkVehicle(myCar, VacancyType.Car);
if (spot) {
  console.log(`Veículo estacionado na vaga [ ${spot.idVacancy} ]`);

// Imprime os dados do cliente e do veículo
console.log(
  "--------------------------------------------------------------------------------------------------------"
);
console.log("\nCliente:");
try {
  console.log(`--> Nome do cliente: ${myCar.ownerName}`);
  console.log(`--> Placa do veículo: ${myCar.vehiclePlate}`);
  console.log(`--> Hora de entrada no estacionamento: ${myCar.entryTime}`);
  console.log(`--> Hora de saída do estacionamento: ${myCar.exitTime}`);
  const duration = myCar.calculateParkingDuration(); // Calcula a duração no estacionamento
  const fee = myCar.getParkingFee(); // Calcula o valor do estacionamento
  console.log(`--> Duração: ${duration} horas`);
  console.log(`--> Valor: R$ ${fee.toFixed(2)}`);
  console.log(
    "\n--------------------------------------------------------------------------------------------------------"
  );
} catch (error) {
  console.error("\nErro na execução. Observar atentamente o código.");
}



  // Processa o pagamento
  try {
    const payment: IPayment = {
      idPayment: "1", // Você precisa gerar um ID de pagamento de forma adequada
      paymentMethod: PaymentMethod.Money, // Supondo que você vai usar o método de pagamento em dinheiro

      processPayment: function () {
        // Aqui você pode implementar a lógica para processar o pagamento e gerar um recibo
        // Vamos apenas criar um recibo simples para este exemplo
        return {
          idPayment: this.idPayment,
          paymentMethod: this.paymentMethod,

          printReceipt: function () {
            console.log("\nRecibo:")
            console.log(`--> ID: ${this.idPayment}`);
            console.log(`--> Método de pagamento: ${this.paymentMethod}`);
            console.log(
              "\n--------------------------------------------------------------------------------------------------------"
            );
          },
        };
      },
    };

    const receipt = payment.processPayment(); // Processa o pagamento
    receipt.printReceipt(); // Imprime o recibo
  } catch (error) {
    console.error("\nErro ao processar o pagamento.");
  }

  // Libera a vaga
  parking.releaseVehicleFromSpot(spot.idVacancy);
  console.log(`\nVeículo liberado da vaga [ ${spot.idVacancy} ]`);
} else {
  console.log("\nNenhuma vaga disponível.");
}

// Imprime a quantidade de vagas disponíveis no estacionamento depois do carro chegar
console.log(
  `\nVagas disponíveis no momento: [ ${parking.availableVacancies} ]`
);
