//Argumentos e parametros

//function expression o
// funccion anonymous
// parÂmetros (parameters)
/*
const sum = function (number1, number2) {
  total= number1 + number2
  return total

//console.log(number1 + number2)
}

let number1 = 34
let number2 = 25 
sum(number1, number2) // ao invocar a function , estou passando arguments- or argumentos
//sum(4, 5)
//sum(56, 83938457584)

/*console.log (`o numero 1 è ${number1}`)
console.log (`o numero 1 è ${number2}`)

console.log (`a soma é ${sum(number1, number2)}`)
console.log(total)

// ***Function is a blender

function makeJuice (fruta1, fruta2){
  return 'sucode : ' + fruta1 + fruta2

}
 const glass = makeJuice (' banana ', ' apple ')
 console.log(glass)

 //function scope 

 let subject 

 function creatThink() {
  subject = 'study'
  return subject 

 }
 console.log(subject)
 console.log(creatThink(subject))
 console.log(subject)

 //function hoisting 

 sayMyName();

 function sayMyName() {
  console.log( 'suelen')

   }
   
   //Arrow(=>) function () => { código a ser executado }, chamada de Arrow Function. moderno compacto
   const sayMyName = (name) => {
console.log( name)
   }
   sayMyName('suelen')

   // callback function - callback function é uma função que está sendo passada para outra função como parâmetro.

function sayMyName(name) {
  console.log('antes de executar a funçao callbak')
  name()
 console.log('depois de executar a callbak')
}

sayMyName (
  () => {
    console.log ('estou em uma callbak')
  }
)

//function() constructor  *expressao new * criar um novo objeto *this keyword


function Person(name){
  this.name = name
  this.walk = function () {
    return this.name + " esta andando "
  }
}
const mayk = new Person(" Mayke ")
const Joao = new Person(" joao ")

console.log(mayk.walk())
console.log(Joao.walk())*/
let fruit = "banana";
function getFruit(fruit) {
  fruit = "orange";
  return fruit
}

console.log(fruit);
console.log(getFruit(fruit));