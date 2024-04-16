// estrutura de repetição

//FOR

// for(let i = 10; i > 0; i--) {
// if( i === 5) {
//   break;
// }

// console.log(i)
// }

//While para definir o momento da parada- enquanto for

// let i = 4805543232;

// while(i < 10) {
//   console.log(i)

//   i/=35

// }

//FOR OF DECLARAÇAO QUE CRIA UM LUUPE

// let name = 'suelen'
// let names = ['otto', 'antonia', 'jose']

// for(let name of names) {
//   console.log(name)
// }

//FOR IN

let person = {
  name: 'Otto',
  age: 30, 
  weight: 30.5
}

for(let property in person){

  console.log(property)
  console.log(person[property])
}
