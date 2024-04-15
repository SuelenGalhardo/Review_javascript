//Prototype PROTÓTIPOS (característica), javascript possue una série da funcionalidades e atributos, 
/* 
*prototype-based language
prototype chain
__proto__
 */

/*
Type conversion(typecasting) vs   coersion

*Alteraçao de um tipo de dado para outro tipo 

*/
//transformou de maneira coersitivamente o 5 em uma string para nao dar problema no nosso codigo 
//console.log('9' + 5) //95

//faço a conversaro do 9 que era string , para um number. agora javascript entende que é um numero e soma. 

//console.log(Number('9') + 5)

//MANIPULAR String e números 

//trasnformar String em número e Numero em String 

/*let string = "123"

console.log(Number(string))

let number = 321

console.log(String(number))*/

//MANIPULANDO STRINGS NUMEROS 

//Contando caracteres e digitos 

/*let word = "paralelepipedo"
console.log(word.length)

let number = 1234
console.log(String(number).length)*/


//Casas decimais-TRANSFORMAR um número quebrado com 2 casas decimais e trocar por vírgula
/*let number = 727.283056
console.log(number.toFixed(2).replace(".", ","))*/

//METODO toUpperCase() - toLowerCase()

/*let word = "Programar é muito baccana!"

console.log(word.toLocaleUpperCase())

let brazil = "BRASIL É O MELHOR PAIS DO MUNDO"

console.log(brazil.toLocaleLowerCase().toLocaleUpperCase())*/

//SEPARANDO STRING  - MANIPULANDO STRING Y ARRAYS

/*let phrase = "eu quero viver o Amor"
let myArray = phrase.split(" ")
//console.log(myArray)
let phrasesWithUnderscore = myArray.join("_")
console.log(phrasesWithUnderscore)

// MANIPULANDO STRINGS  includes() includes nao verifica se muda entre maiusculo o minusculo. 

let phrase = "eu quero viver o amor"

console.log(phrase.includes("amor"))

//MANIPULANDO ARRAYS
// Criar ARRAY com construtores usa-se new Array(args), passando como argumento o tamanho deste vetor ou os valores,
// por exemplo: const array = new Array("a", "b", "c").

//et myArray = new Array('a', 'b', 'c' )
let myArray = new Array(10)
console.log(myArray)

//CONTAR ELEMENTOS DE UM ARRAY 
//console.log(["a", {type: "array"},
 //function () { return "alo"},][1].type)

console.log(["a", "b", "c"].length)

//Strings para arrays -TRANSFORMAR CCADEIA EM CARACTERES EM ELEMENTOS DE UM ARRAY

let word = "manipulaçao"

console.log(Array.from(word))*/

//MANIPULANDO ARRAYS

let techs = [ "html", "css", "js"]

//ADICIONAR UM ITEM NO FIM

techs.push("node.js")
// ADICIONAR NO COMEÇO

techs.unshift("sql")
//REMOVER DO FIM
//techs.pop("node.js")
// REMOVER DO COMEÇO 
//techs.shift("sql")
// PEGAR SOMENTE ALGUNS ELEMENTOS DO ARRAY

//console.log(techs.slice(1, 2))
//remover 1 ou mais items em qualquer posiçao do array

//techs.splice(1, 2)
// ENCONTRAR A POSIÇAO DE UM ELEMNTO NO ARRAY
let index = techs.indexOf('html')
techs.splice(index, 1)

console.log(techs)