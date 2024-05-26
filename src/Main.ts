import { IVehicle } from "./Vehicle/IVehicle";
import { Vehicle } from "./Vehicle/Vehicle";
import { ParkingSpot } from "./ParkingSpot/ParkingSpot";
import { VacancyType } from "./ParkingSpot/IParkingSpot";

// Exemplo de uso da classe Vehicle
const myVehicle = new Vehicle(
  "Lucas Rodrigues Cunha",
  "XYZ-1234",
  new Date("2023-05-25T08:00:00")
);
myVehicle.setExitTime(new Date("2023-05-25T12:30:00"));

try {
  const duration = myVehicle.calculateParkingDuration();
  const fee = myVehicle.getParkingFee();
  console.log(myVehicle);
  console.log(`Duration: ${duration} hours`);
  console.log(`Parking Fee: R$ ${fee.toFixed(2)}`);
} catch (error) {
  console.error("Erro na execução. Observar o código.");
}

//
//
//
console.log("\n");
//
//
//

// Exemplo de uso da classe Vehicle
const myVehicle2 = new Vehicle(
  "João Antônio Pereira",
  "XYZ-4321",
  new Date("2023-05-26T09:00:00")
);
myVehicle2.setExitTime(new Date("2023-05-26T09:30:00"));

try {
  const duration = myVehicle2.calculateParkingDuration();
  const fee = myVehicle2.getParkingFee();
  console.log(myVehicle2);
  console.log(`Duration: ${duration} hours`);
  console.log(`Parking Fee: R$ ${fee.toFixed(2)}`);
} catch (error) {
  console.error("Erro na execução. Observar o código.");
}

//
//
//
console.log("\n");
//
//
//

// Exemplo de uso da classe ParkingSpot com o objeto myParkingSpot e myVehicle
const myParkingSpot1 = new ParkingSpot(
  "1",
  VacancyType.Car, // Tipo de vaga usando a enumeração VacancyType
  true
);

try {
  const designatedVehicle = myParkingSpot1.designateVehicle(myVehicle2);
  console.log(myParkingSpot1);
  console.log(
    `Veículo designado: ${
      designatedVehicle ? designatedVehicle.vehiclePlate : "Nenhum"
    }`
  );

  myParkingSpot1.releaseVehicle();
  console.log(myParkingSpot1);
  console.log("Veículo liberado com sucesso.");
} catch (error) {
  console.error("Erro na execução. Observar o código.");
}

//
//
//
console.log("\n");
//
//
//

// Exemplo de uso da classe ParkingSpot com o objeto myParkingSpot2 e myVehicle2
const myParkingSpot2 = new ParkingSpot(
  "2",
  VacancyType.Motorcycle, // Tipo de vaga usando a enumeração VacancyType
  true
);

try {
  const designatedVehicle = myParkingSpot2.designateVehicle(myVehicle2);
  console.log(myParkingSpot2);
  console.log(
    `Veículo designado: ${
      designatedVehicle ? designatedVehicle.vehiclePlate : "Nenhum"
    }`
  );

  myParkingSpot2.releaseVehicle();
  console.log(myParkingSpot2);
  console.log("Veículo liberado com sucesso.");
} catch (error) {
  console.error("Erro na execução. Observar o código.");
}