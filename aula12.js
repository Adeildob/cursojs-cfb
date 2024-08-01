//Operador spread - ex. var1 = [...var] - quebra array, htmlcollection, e outras coleções
// Funcção de copia um array

let n1 = [10, 20, 30];
let n2 = [11, 22, 33, 44, 55];
//let n3 = n1 //o mesmo resultado da linha abaixo
//let n3 = [...n1]; //copiando um array para dentro de outro

//let n3 = [n1, n2]; //o mesmo resultado da linha abaixo
let n3 = [...n1, ...n2]; //copiando um array para dentro de outro

console.log("n1: " + n1);
console.log("n2: " + n2);
console.log("n3: " + n3);
console.log("Tipo de n3: " + typeof n3);

//Usando o operador spread

const jogador1 = { nome: "Bruno", energia: 100, vidas: 3 };
const jogador2 = { nome: "Bruce", energia: 100, vidas: 5 };
const jogador3 = { ...jogador1, ...jogador2 };

const jogador4 = { nome: "Bruno", energia: 100, vidas: 3, magia: 150 };
const jogador5 = { nome: "Bruce", energia: 100, vidas: 5, velocidade: 80 };
const jogador6 = { ...jogador4, ...jogador5 };

// Se os objetos tiverem as mesmas proriedades, o objeto resultante manterá as propriedades, e os dados do último objeto
// Ja se os objetos tiverem propriedades diferentes, o objeto resultante mesclará as propriedades, com os dados do último objeto
console.log(jogador3);
console.log(jogador6);

//Exemplo com função arrow function
const soma = (v1, v2, v3) => v1 + v2 + v3;

console.log(soma(1, 5, 9));

// mesmo o array com 4 elementos, apenas serão somados os 3 primeiros elementos, pois a função possui 3 parêmetros
let valores = [1, 5, 9, 20];
console.log(soma(...valores));

//Com manipulação de elementos do DOM
const objs1 = document.getElementsByTagName("div"); //Gera um HtmlCollection
const objs2 = [...document.getElementsByTagName("div")]; //Gera um Array, podendo outros tipos de elementos, além de Html e possibilitando usar mais métodos
console.log(objs1);
console.log(objs2);

/* o método forEach não funciona com  Html Collection
objs1.forEach((Element) => {
  console.log(Element.textContent);
});
*/

objs2.forEach((Element) => {
  console.log(Element);
  console.log(Element.textContent);
  Element.innerHTML = "Curso";
});
