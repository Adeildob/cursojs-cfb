//Manipulação do DOM - document.getElementById
const dc1 = document.getElementById("c1");
const dc2 = document.getElementById("c2");
const dc3 = document.getElementById("c3");
const dc4 = document.getElementById("c4");
const dc5 = document.getElementById("c5");
const dc6 = document.getElementById("c6");

const arrayElementos = [dc1, dc2, dc3, dc4, dc5, dc6];

// for (d of arrayElementos) {
//   d.innerHTML = "CFB Cursos";
// }
// console.log(arrayElementos);

// Mais moderno e mais simples
arrayElementos.map((e) => {
  e.innerHTML = "CFB Cursos";
  console.log(e);
});

//Manipulação do DOM - document.getElementByTagName

//const colecaoHTML = document.getElementsByTagName("div");

//Retorna um HTML Collection sem o comando spread
let colecaoHTML = document.getElementsByTagName("div");
//colecaoHTML = [...colecaoHTML];
console.log(colecaoHTML);

const colecaoHTML2 = [...document.getElementsByTagName("div")]; // vantagem de ser imutável

console.log(colecaoHTML2);

colecaoHTML2.map((e) => {
  console.log(e);
});
