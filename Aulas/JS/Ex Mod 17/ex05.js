const lista = [1,2,3,4,5,6,7]

//Reduce = retorna um valor apenas
//parametros = callback(acumulador, item), valor inicial do acumulador lista.reduce(callback(acc, item), 0) 

const reduce = lista.reduce((acc, item) => {
  if(item%2==0) {
    return acc + item
  } else {
    return acc * item
  }
}, 0)

console.log(reduce)