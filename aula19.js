//Diferenças entre declarações BREAK e CONTINUE

let n = 0;
let max = 3000;

while (n <= max) {
  console.log(n++);

  /* ou
  console.log(n);
  n++
  */
  if (n > 10) {
    break; //para e sai do loop
  }
}

console.log("Fim do programa");

n = 1;
max = 20;
pares = 0;

for (let i = n; i <= max; i++) {
  console.log(i);
  if (i % 2 != 0) {
    continue; //pula a interação e não conta os pares
  }
  pares++;
}
console.log(`Número de números pares ${pares}`);
console.log("Fim do programa");
