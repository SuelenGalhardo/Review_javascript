/*
  Capture 10 items para compor a lista de um supermercado.
  
  Após capturar os 10 items, imprima-os, separando por vírgula.
  array ou vetores
*/
alert(" lista de compra")
let items = [];

for ( let item = 0; item < 5; item++) {  
    let itemName = prompt("digite o intem " + (item + 1))

    items[ item ] = itemName 

}

alert ( items )  