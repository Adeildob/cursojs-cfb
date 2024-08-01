// Condicicional ou Declaração IF

let num = 40;
let clima = "sol";
let energia = 60;

// Não necessita usar {} quando tiver apenas um comando
if (num > 10) console.log("Número maior que 10");

//Com opção de comandos para verdadeiro e para falso
if (num > 10) {
  console.log("Número maior que 10");
} else {
  console.log("Número menor ou igual a 10");
}

//Com várias opções de teste de verdadeiro e falso
if (num > 10) {
  console.log("Número maior que 10");
  //Aninhamento de IF
  if (num > 50) {
    console.log("Número maior que 50");
  }
} else if (num > 10) {
  console.log("Número está entre 6 e 10");
} else {
  console.log("Número menor ou igual a 5");
}

//Com expressões AND OR e outros operadores
if (energia > 70 && clima == "sol") {
  console.log("Eu vou a praia");
} else {
  console.log("Eu vou ao cinema");
}

console.log("Fim do programa");
