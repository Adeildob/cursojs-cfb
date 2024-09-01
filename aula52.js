// Arrays em Javascript

const caixa = document.getElementById("caixa");

let cores = ["azul", "verde", "vermelho", ["claro", "médio", "escuro"]];
let cursos = ["HTML", "CSS", "JavaScript", cores];

//cursos[0] = 2024;
//cursos[0] = "C++";

cursos.push("C++"); //adiciona um novo elemento no final
cursos.push("Python");
cursos.pop(); //retirar o último elemento

cursos.unshift("Delphi"); //adiciona um novo elemeto no início
cursos.shift(); //retirar o elemento do início

console.log(cursos[2]);
console.log(cursos[3]);
console.log(cursos[3][1]);
console.log(cursos[3][3][0]);

cursos.map((el) => {
  let p = document.createElement("p");
  p.innerHTML = el;
  caixa.appendChild(p);
});
