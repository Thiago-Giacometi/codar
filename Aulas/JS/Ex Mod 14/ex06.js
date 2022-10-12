/*Crie uma lista de alunos com pelo menos 5 alunos, onde
cada aluno tenha 5 informaçoesn
k NomeN
k Nome do cursoN
k Porcentagem atual de progresso dentro do cursoN
k Oe o curso já foi finalizado ou nãoN
k Uma lista com o nome das aulas favoritadas (pelo menos
2 itens).*/

const alunos = [
  {
    nome: 'Thiago',
    curso: 'codar',
    porcentagemConcluida: 50,
    cursoFinalizado: false,
    aulasFavoritas: ['JS', 'CSS']
  },
  {
    nome: 'Fernanda',
    curso: 'Eng Prod',
    porcentagemConcluida: 45,
    cursoFinalizado: false,
    aulasFavoritas: ['Ponte', 'Calculo']
  },
  {
    nome: 'Monique',
    curso: 'Letras',
    porcentagemConcluida: 100,
    cursoFinalizado: true,
    aulasFavoritas: ['Literatura', 'Ler']
  },
  {
    nome: 'Will',
    curso: 'Eng Elet',
    porcentagemConcluida: 75,
    cursoFinalizado: false,
    aulasFavoritas: ['Comandos', 'Instalação']
  },
  {
    nome: 'Flavia',
    curso: 'Log',
    porcentagemConcluida: 100,
    cursoFinalizado: true,
    aulasFavoritas: ['excel', 'aviao']
  }
]

console.log(alunos)