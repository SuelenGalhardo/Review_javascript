// // CONTROLE DE FLUXO DE APLICAÇAO 
// // CONTROLFLOW

// // //se estiver sujo
// // console.log('lavar o copo ')


// // console.log('servir café')


//   // IF ....  ELSE

// //   let temperature = 37.5

// // if ( temperature >= 37) {
// //   //apenas será executado o bloco de código caso condição seja true
// // console.log('Febre')
// // }

// // else {
// //   console.log('Saudavel')
// // // apenas será executado o bloco de código caso condição do if seja false
// // }

// let temperature = 37.4
// let highTemperature = temperature >= 37.5
// let mediumTemperature =  temperature <37.5 && temperature >= 37

// if ( highTemperature) {
//   //apenas será executado o bloco de código caso condição seja true
// console.log('Febre alta')
// }

// else if (mediumTemperature){

//   console.log('febre moderada')


// }
// else {
//   console.log('Saudavel')
// }
  
// // apenas será executado o bloco de código caso condição do if seja false



// /*

// let temperature = 36.9
// let highTemperature = temperature >= 37.5
// let mediumTemperature = temperature < 37.5 && temperature >= 37

// if(highTemperature) {
//     console.log('Febre alta')
// } else if(mediumTemperature) {
//     console.log('Febre moderada')
// } else {
//     console.log('Saudável')
// }
// */

//Switch

/*let expression = ''

switch (expression) { // puxa a expressão para o switch
  case 'a': // confere se o valor da expressão é o correto
    console.log('a')
    break // para a execução do switch apenas se verdadeiro
  case 'b':
    console.log('b')
    break
  default: // caso nenhum valor seja o correto, realizará a 
					 //instrução dentro de si.
    console.log('default')
    break
}*/


// function calculate(number1, operator, number2) {

//   let result = 0;

//   switch (operator) {
//       case '+':
//           result = number1 + number2
//           break
//       case '-':
//           result = number1 - number2 
//           break
//       case '*':
//           result = number1 * number2
//           break
//       case '/':
//           result = number1 / number2 
//           break
//       default:
//           console.log('não implementado')
//           break
//   }

//   return result
// }

// //console.log(calculate(4, '+', 8))
// console.log(calculate(4, '*', 8))
// console.log(calculate(4, '/', 8))
// console.log(calculate(4, '', 8))


///**Throw(lançar, disparar ) e Try(tentar)/Catch( pegar )***/  parte do controle de fluxo da aplicação.

//Throw(lançar, disparar ) 
function sayMyName(name = '') {
  if (name === '') {
      throw 'Nome é obrigatório'
  }

  console.log('depois do errro')
}



// try(VAI EXECUTAR A FUNÇAO /catch (EQUANTO CATCH VAI CAPTURAR O ERRO E ATRIBUIR A VARIAVEL)
try {
  sayMyName()
} catch(e) {
  console.log(e)
}

console.log('após ao try/catch')
