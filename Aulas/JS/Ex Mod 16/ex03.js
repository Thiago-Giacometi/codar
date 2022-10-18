const funcao = (n1, n2, n3) => {
  if(n1 == undefined || n3 == undefined || n2 == undefined) {
    return `"Os valores não foram preenchidos corretamente!`
  } else {
    return (n1 + n2 + n3) * 4
  }
}

console.log(funcao(1, 2, 3))