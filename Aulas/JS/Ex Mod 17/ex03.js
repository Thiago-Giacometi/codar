const numeros = [1,2,3,4,5,6,7]
const par = numeros.filter(item => item%2==0 ? true : false)
const impar = numeros.filter(item => !(item%2==0) ? true : false)

//map retorna um novo valor para a posição do array

const parMult = par.map(item => item*2)
const imparMult = impar.map(item => item*2)

console.log(parMult)
console.log(imparMult)