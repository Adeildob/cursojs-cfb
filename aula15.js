//Estruturas de repetição
//Loops definidos (número de iterações conhecido) e loops indefinidos (número de iterações não conhecido)

//Loop Definido (For)

console.log("Início do programa");

for (let x = 0; x < 100; x++) {
  if (x % 2 == 0) {
    console.log(`O valor ${x} é par.`);
  } else {
    console.log(`O valor ${x} é impar.`);
  }
}

console.log("Fim do programa");
