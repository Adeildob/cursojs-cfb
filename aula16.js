//Estruturas de repetição
// Variações do Loop For

const objs = document.getElementsByTagName("div");

let num = [10, 20, 30, 40, 50];

for (let i = 0; i < num.length; i++) {
  console.log("Posição " + i + " valor " + num[i]);
}

// For in --> itera o incremento
for (n in num) {
  console.log(`Posição ${n} valor ${num[n]}`); //Template String
}

// For of --> itera diretamente os elementos dentro da coleção
for (n of num) {
  console.log(`O valor é ${n}.`); //Template String
}

for (o of objs) {
  console.log((o.innerHTML = "Curso"));
}

for (o in objs) {
  console.log(objs[o].innerHTML);
}

console.log("Fim do programa");
