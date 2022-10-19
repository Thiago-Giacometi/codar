/*
4. Simulando forEach

- Declare uma função chamada forEach que recebe dois parâmetros: um array e um callback

- Use a estrutura "for" para percorrer o array e executar o callback para cada um dos itens da lista

- Execute forEach passando uma lista de 7 números, e um callback que mostre a mensagem "O número NUMERO é par/ímpar".
*/
const numeros = [1,2,3,4,5,6,7]

const forEach = function(array, callback) {
  for(let i = 0; i < array.length; i++) {
    callback(array[i])
  }
}

const parImpar = (item) => {
  if(item%2==0) {
    console.log(`O número ${item} é par`)
  } else {
    console.log(`O número ${item} é impar`)
  }
}

forEach(numeros, parImpar)


