//DOM - método querySelector

const divTodos = [...document.getElementsByTagName("div")];
const cursosTodos = [...document.getElementsByClassName("curso")];
const cursosC1 = [...document.getElementsByClassName("c1")];
const cursosC2 = [...document.getElementsByClassName("c2")];
//const cursosEspecial = document.getElementsByClassName("curso")[6];
const cursosEspecial = document.getElementById("c1");

//const query_divTodas =document.querySelector("div") --> retorna apenas a primeira div

//const query_divTodas = [...document.querySelectorAll("div[class]")]; // retorna, num Array, todas as divs com atributo class
const query_divTodas = [...document.querySelectorAll("div > p")]; // retorna, num Array, todos elementos que possuem como elemeto parent uma div
const query_cursosTodos = [...document.querySelectorAll(".curso")]; // retorna, num Array, as class curso
const query_cursosC1 = [...document.querySelectorAll(".c1, p")];
const query_cursosC2 = [...document.querySelectorAll(".c2")];
// const query_cursosEspecial = document.querySelector("#c1"); retorna o elemento de id "c1"
const query_cursosEspecial = document.querySelectorAll("#c1")[0];

console.log(query_divTodas);
console.log(query_cursosTodos);
console.log(query_cursosC1);
console.log(query_cursosC2);
console.log(query_cursosEspecial);

// console.log(divTodos); //retorna um Array
// console.log(cursosTodos); //retorna um Array
// console.log(cursosC1); //retorna um Array
// console.log(cursosC2); //retorna um Array
// console.log(cursosEspecial); //retorna o elemento na posição indicada quando utilizada a linha 7

// cursosC2.map((el) => {
//   el.classList.add("destaque");
// });
