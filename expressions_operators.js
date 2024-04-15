// /*Expressões e operadores Expressions e Operators
// Binary
// Unary
// Ternary




// let number ;
// let number = 1

// (function(){
//   console.log('alo')
// })()

//  unário 
// let number = 1

// console.log(++number)

// binário 
// let number = 1

// console.log(number + 1)

// ternário 
// console.log(true ? 'alo' : 'nada')

// //NEW também denominada como left-hand-side expression- cria um novo objeto con func construtoras 

// let fullName = new String('Maike')
// fullName.surName = "brito"
// let age = new Number(23)
// console.log(fullName.surName, age )
// let date = new Date('2020-12-01')
// console.log(date.__proto__)

// /*Operadores unários 
// typeof
// delete


// const person = {
//   name: 'Suelen', 
//   age: 25,
// }

// delete person.age

// console.log(person)*/

// //OPERADORES ARITIMETICOS

// //operador de multiplicação é o * (asterisco);
// //console.log(3.2 * 5)

// // operador de divisão é a / (barra);
// //console.log(6 / 12 )

// // operador de soma é o + (positivo);
// //console.log ( 2 + 2 )
// // operador de subtração é o - (negativo)

// //console.log( 2 - 5 )


// /* resto da divisão: sinal % */
// // let remainder
// // remainder = 11 % 3
// // console.log(remainder)

// // /* incremento: sinal ++ */
// // let increment = 0
// // // increment++
// // // increment++
// // // increment++
// // console.log(++increment)
// //console.log(increment)

// // /* decremento: sinal -- */
// // let decrement = 5
// // decrement--
// // console.log(decrement)

// /* exponencial: sinal ** */
// // console.log(2 ** 3)

// // GROUPIN OPERATOR

// // let total = 2 + 3 * 5

// // console.log(total)
// //com essa precedência, nosso resultado é 17.

// // let total = (2 + 3) * 5
// //  console.log(total)
// // o cálculo mudou a precedência, fazendo nosso resultado tornar-se 25.

// // let total = (" alo alo " + " voce ")
// // console.log(total)

// //OPERADORES DE COMPARAÇAO. 
// //irá compara valores e retornar um Boolean como resposta â comparaçao.
// //  let one = 1
// //  let two = 2

//  // == igual a
// // console.log( two == 1)
// // console.log(one == "1")

// // != diferente de 
// // console.log(one != two)
// // console.log(one !=1)
// // console.log(one != "1")

// //Operadores de comparação estritamente igual e estritamente diferente

// // === estritamente igual a
// // console.log( one === "1")
// // console.log( one === 1 )

// // !== estritamente difretente de :

// //console.log(two !== "2")
// //console.log (two !== 2)

// //OPERADORES DE COMPARAÇAO

// //> Maior que
// // console.log( one > two)

// // // >= Maior igual a 
// // console.log(one >= 1)
// // console.log(two >= 1)


// // // < Menor que  
// //  console.log(one < two)

// // // <= Menor igual a 
// // console.log(one <= two)
// // console.log(one <= 1)
// // console.log(one <= 0)

// // Operadores de atribuição (Assignment)
// let x


// // assignment normal:
// x = 1
// //console.log(x)

// // addition assignment (adição):
// // x = x + 2
// x += 2
// // subtraction assignment (subtração):
// //x = x - 1
// x -= 1

// // multiplication assignment (multiplacação):
// x *= 2

// // division assignment (divisão):
// x /= 2

// // exponetiation assignment (exponenciação):
// x **= 2
// console.log(x)

// // remainder assignment (resto de divisão):
// x %= 2

// Operadores lógicos (logical operators)

// - 2 valores booleanos, que verificados, 
//resultará em verdadeiro ou falso 

// let bread = true
// let cheese = false

// // AND && -- E

// //console.log( bread && cheese)

// // OR || --- OU
// // let bread = true
// // let cheese = false

// //console.log( bread || cheese )


// //NOT !  negaçao

// console.log(!bread )

//******Operador condicional ternário -- condição ? valor1 : valor2 -- 

// DEPENDENDO DA CONDÇAO , NÓS RECEBEREMOS VALORES DIFRETENES 

// CONDIÇAO ENTAO VALOR 1 SE NAO VALOR 2 

// condition ? value1 : value2

//exemplos

//café da manha top
// let bread = true
// let cheese = true
// const niceBreakfast = bread && cheese ? 'Cafe top' : 'Cafe ruim'

//console.log(niceBreakfast)
//Maior de 18 
// let age = 16 
// const canDrive = age >= 18 ? ' can drive' : "cant'drive"

// console.log(canDrive)

// STRING OPERATOR
// COMPARISON (COMPARAÇAO)
//console.log('a' == 'v')

//concatenation (concatenaçao)
// Retorna a uniao de duas Strings 

// let alpha = 'alpha'
// alpha += 'bet'
// console.log( alpha + 345)
//console.log('a' + 'a')
// nesse caso, o retorno da string seria aa.

//*****Falsy e truthy****

// Type conversion (typecasting) vs Type coersion 


//console.log(Number('9') + 5)

/* falsy
	Todos os valores abaixo seriam representados como false em um boolean.
		false
    0
    -0
    ""
    null
    undefined
    NaN
*/

// console.log( true ? 'verdadeiro' : 'falso' )
// console.log( 0 ? 'verdadeiro' : 'falso' )
// console.log( "" ? 'verdadeiro' : 'falso' )
// console.log( undefined ? 'verdadeiro' : 'falso' )
// console.log( NaN ? 'verdadeiro' : 'falso' )

// /*  truthy 
// 	Todos os valores abaixo seriam representados como false em um boolean.
// 		true
//     {}
//     []
//     1
//     3.23
//     "0"
//     "false"
//     -1
//     Infinity
//     -Infinity
// */

// console.log( true ? 'verdadeiro' : 'falso' )
// console.log( Infinity ? 'verdadeiro' : 'falso' )
// console.log( {} ? 'verdadeiro' : 'falso' )
// console.log( [] ? 'verdadeiro' : 'falso' )
// console.log( 3.23  ? 'verdadeiro' : 'falso' )



//*****Precedência dos operadores ******

// De cima para baixo, do mais importante ao menos importante.

// * grouping   O MAIS !!!IMPORTANTE!!!                 ( )
  console.log((2 + 5) * 10 )   
// * negação e incremento          ! ++ --
// * multiplicação e divisão       * /
// * adição e subtração            + -
// * relacional                    < <= > >=
// * igualdade                     == != === !==
// * AND                           && 
console.log(2 > 2 && 2 > 1)

// * OR                            ||
// * condicional                   ?:
// * assignment (atribuição)       = += -= *= %= 

console.log(3 > 2 && 2 > 1)
