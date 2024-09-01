// Template string

const caixa = document.querySelector("#caixa");

const carros = ["Polo", "Golf", "T-Cross", "HRV"];

let ul = `<ul>`;
carros.map((el) => {
  ul += `<li>${el}</li>`;
});
ul + `</ul>`;

caixa.innerHTML = ul;

/*
const curso = "Javascript";
const canal = "CFB Cursos";

// \n quebra linha apenas no console
const frase = "Este é o curso de \n " + curso + " do canal " + canal + ".";

// <br/> quebra linha no DOM
const frase2 = `Este é o <br/> curso de ${curso} do <br/> canal ${canal}`;

console.log(frase);
console.log(frase2);

// caixa.innerHTML = frase;

caixa.innerHTML = frase2;
*/
