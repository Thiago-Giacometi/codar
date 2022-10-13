const vehicle = {
  cor: "Prata",
  marca: "Volkswagen",
  modelo: "Gol G4",
  tipo: "Carro",
}

switch(vehicle.tipo){
  case "Carro":
    console.log(`O ${vehicle.modelo} é um veículo de 4 rodas da marca ${vehicle.marca}`)
    break;
  case "Moto":
    console.log(`O ${vehicle.modelo} é um veículo de 2 rodas da marca ${vehicle.marca}`)
    break;
  case "Caminhão":
    console.log(`O ${vehicle.modelo} é um veículo de 8 rodas da marca ${vehicle.marca}`)
    break;
  default:
    console.log("Veiculo não identificado")
}
