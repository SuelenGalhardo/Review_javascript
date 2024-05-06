Nessa aula aprenderemos sobre:
Estrutura de dados
Organização e gerenciamento dos dados
Melhor eficiência do código
[] Estruturas de repetição

laço de repetição
for [] Vetores (Arrays) [] Tipo de dado estruturado [] incremental (++): o valor + 1 [] Tipo de dado: undefined
Código da aula:
/*
  Capture 10 items para compor a lista de um supermercado.
  
  Após capturar os 10 items, imprima-os, separando por vírgula.
*/


let items = [];

for(let item = 0; item < 2; item++) {
  let itemName = prompt("Digite o item " + (item + 1))

  items[item] = itemName
}

alert(items)