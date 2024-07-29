"use strict"; // Modo Estrito

// Demonstração de escopo com let (escopo mais definifo) e var (escopo não controlado)
function teste() {
  if (true) {
    let nome = "Bruno";
    console.log("Dentro do IF do teste " + nome);
  }
  console.log("Dentro de teste " + nome);
}

teste();
console.log("Fora de teste " + nome);

//Variáveis assume o tipo de acordo com a atribuição
let nome2 = "Bruno";
nome2 = "Junior";
nome2 = 10;
console.log(nome2);

//Variáveis com const
const curso = "Javascript";
curso = "Python";
console.log(curso);
