const renda = 350 + 180 + 600
const salarioMinimo = 1350

if(renda < salarioMinimo) {
  console.log(`Falta ${salarioMinimo - renda} para atingir o salário minimo`)
} else {
  console.log("Recebe pelo menos um salário minimo")
}
