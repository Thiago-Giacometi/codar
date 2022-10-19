const alfabeto = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const novoNome = []

function cifraCesar (nome) {
  nome.toUpperCase().split('').forEach(itemNome => {
    novoIndex = alfabeto.findIndex(itemAlfabeto => itemAlfabeto === itemNome) + nome.length
    novoNome.push(alfabeto[novoIndex])
  })

}

cifraCesar('Thiago')
console.log(`O nome criptografado é ${novoNome.join('')}`)
