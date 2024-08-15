// Função parametrizada

//Pode ser com indicação de valores padrão
//Com impressão dentro da função
function soma(n1 = 0, n2 = 0) {
  console.log(n1 + n2);
}

soma();
soma(12, 6);

const VALOR_PADRAO = 0;

//Pode ser com indicação de valores padrão
//Com retorno de valor
function soma2(n1 = VALOR_PADRAO, n2 = VALOR_PADRAO) {
  //return n1 + n2;
  let res;
  res = n1 + n2;
  return res;
}

//console.log(soma2(10, 10));
let resultado_soma = soma2(5, 5);
console.log(resultado_soma);

//Possibilidade de operar a variável dentro da função inclusive sem o return
function add(v) {
  //return valor + v;
  valor += v;
}

//Variável externa sendo trata dentro da função
let valor = 0;

console.log("----");
console.log(valor);
//valor = add(10);
add(10);
console.log(valor);
//valor = add(5)
add(5);
console.log(valor);
console.log("----");
