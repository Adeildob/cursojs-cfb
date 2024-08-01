//Estrutura de Repetição "do while"
//Executa ao menos uma vez antes do teste

let n = 10;

do {
  console.log(n); //Vai imprimir 10 mesmo sem testar se n é menor que 10
  n++;
} while (n < 10);

console.log("Fim do programa");

n = 0;

while (n <= 10) {
  //Vai testar antes de imprimir
  console.log(n);
  n++;
}

console.log("Fim do programa");
