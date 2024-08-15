/*
Funções anônimas não tem nome e apenas são criadas no momento da execução, não ficando em memória 
precisa associar a uma variável
*/

const f = function (v1, v2) {
  return v1 + v2;
};

console.log(f(10, 5));

//Função Annônima com spread
const f2 = function (...valores) {
  let res = 0;
  for (v of valores) {
    res += v;
  }
  return res;
};

console.log(f2(18, 95));

//Função Construtor Anônima
const f3 = new Function("v1", "v2", "v3", "return v1+v2+v3"); //A função construtor anônima usa o termo "new" e o termo "Function" deve ser com "f" maiúsculo

console.log(f3(18, 95, 15));
