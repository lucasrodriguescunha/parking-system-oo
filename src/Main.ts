import { IVehicle } from "./Vehicle/IVehicle";
import { Vehicle } from "./Vehicle/Vehicle";
import { ParkingSpot } from "./ParkingSpot/ParkingSpot";
import { VacancyType } from "./ParkingSpot/IParkingSpot";
import { Parking } from "./Parking/Parking";



// Exemplo de uso da classe Parking e Vehicle com o objeto myCar

// Cria um novo estacionamento com 10 vagas
const parking = new Parking(10);
console.log(parking);

// Cria um novo veículo
const myCar = new Vehicle("Jon Doe", "ABDE1234", new Date());

// Encontra uma vaga disponível e estaciona o veículo
const spot = parking.parkVehicle(myCar, VacancyType.Car);
if (spot) {
  console.log(`Veículo estacionado na vaga ${spot.idVacancy}`);
} else {
  console.log("Nenhuma vaga disponível.")
}

// Libera a vaga
if (spot) {
  parking.releaseVehicleFromSpot(spot.idVacancy);
  console.log(`Veículo liberado da vaga ${spot.idVacancy}`);
}

// console.log(parking)
// console.log(myCar);
// console.log(spot);