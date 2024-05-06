/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
  
>  (maior que)
< (menor que)
= (maior ou igual a)
<= (menor ou igual a)
== (igual a)
!= (diferente de)

[] Tipo de dado: Boolean (true | false) 
[] if/else (elseif) 
[] Operadores comparativos
*/

alert("Vamos calcular sua average?")

let StudentName = prompt("Nome do aluno")
let averageOne = prompt("Digite a primeira average: ")
let averageTwo = prompt("Digite a segunda average: ")
let averageThree = prompt("Digite a tercera average: ")

let average = (Number(averageOne) + Number(averageTwo) + Number(averageThree)) / 3
let result = average > 6 
//alert(result)
average = average.toFixed(2)

if (result) {
  alert("Parabéns, " + StudentName + "! Sua média foi de: " + average)
} else if (average < 3) {
  alert("Reprovado")
} else {
  alert(StudentName + " estude para sua prova de recuperação! Sua média foi de: " +  average)
}
