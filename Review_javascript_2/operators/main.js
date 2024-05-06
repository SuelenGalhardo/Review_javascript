/*
  Capturar 2 números
  e fazer as operações matemáticas
  de soma, subtração, multiplicação,
  divisão e resto da divisão.

  E para cada operação, mostrar um alerta
  com o resultado.
*/

let fistNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

fistNumber = Number(fistNumber)
secondNumber = Number(secondNumber)

const sum = fistNumber + secondNumber
const sub = fistNumber  - secondNumber
const mult = fistNumber  * secondNumber
const div = fistNumber / secondNumber
const restDiv = fistNumber & secondNumber

alert('Soma: ' + sum )
alert('Sobtraçao: ' + sub )
alert('Multiplicaçao: ' + mult )
alert('Divisao: ' + div )
alert('Resto da divisao: ' +  restDiv )
