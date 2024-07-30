let n1 = 1;
let n2 = "1";

console.log(n1 === n2); // Considera além do conteúdo o tipo, diferente do "==" tem que ser exatamente igual

let v1 = { nome: "Bruno" };
let v2 = { nome: "Bruno" };

console.log(n1 === n2); // Por ser um objeto, considera além do conteúdo e do tipo, a posição/endereço de memória, daí o fato de serem diferentes

// let nome = prompt("Digite o seu nome: ");
// console.log(nome);

let n3 = 1;
let n4 = 2;

console.log(n3 != n4);
console.log(!(n3 != n4));

//Teste para verificar se a aplicação está rodando num celular ou num PC utilizando Javascript (Pode ser realizadp por Html ou CSS também)
/*
if (
  navigator.userAgent.match("/Android/1") ||
  navigator.userAgent.match("/webOS/1") ||
  navigator.userAgent.match("/iPhone|iPad|iPod/1") ||
  navigator.userAgent.match("/BlackBerry/1") ||
  navigator.userAgent.match("/Windows Phone/1") ||
  navigator.userAgent.match("/Opera Mini/1") ||
  navigator.userAgent.match("/IEMobile/1")
) {
  console.log("Celular");
} else {
  console.log("PC");
}
*/

// Declaração de variáveis. e a posição de memória fica permanente enquanto em execução
//Escopo Global
let nome1 = "Bruno";

//Escopo local restrito ao escopo, libera a posição de memória após a execução desse escopo
{
  let siglacurso = "JS";
  console.log(siglacurso);
}

//A função estará pronta para execução e após a execução libera a memória
const curso = () => {
  let curso = "Javascript";
  console.log(curso);
};

curso();
