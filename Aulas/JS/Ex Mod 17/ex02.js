const numeros = [1,2,3,4,5,6,7]

//filter retorna uma nova lista
const par = numeros.filter(item => item%2==0 ? true : false)
const impar = numeros.filter(item => !(item%2==0) ? true : false)

console.log(par.length)
console.log(impar.length)