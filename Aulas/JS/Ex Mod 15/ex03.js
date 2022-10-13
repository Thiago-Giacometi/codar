const person = {
  name: "Thiago",
  salary: 3000,
  employee: true,
  heir: false
}

if(person.employee && !person.heir){
  if(person.salary > 35000) {
    console.log("Classe A")
  } else if(person.salary<35000 && person.salary>20000){
    console.log("Classe B")
  } else {
    console.log("Classe C")
  }
} else {
  console.log("Desenpregados e herdeiros não se enquadram!")
}

