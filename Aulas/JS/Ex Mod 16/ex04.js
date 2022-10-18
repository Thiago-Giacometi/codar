const obj = (name, age) => {
  return {
    name: name,
    age: age,
    bornIn: 2022-age
  }
}

const person = obj('Thiago', 23)

const showPerson = pessoa => {
  return `${pessoa.name} tem ${pessoa.age} pois nasceu em ${pessoa.bornIn}`
}

console.log(showPerson(person))