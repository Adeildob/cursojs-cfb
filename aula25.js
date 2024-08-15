//Padrão de declaração de function Anônimas - Ex.: const soma = function(v1,v2) {return v1+v2}

//Arrow function ou funções Lambdas (Anônimas)

const nome = (n) => {
  return n;
};
console.log(nome("CFB Cursos"));

const soma = (v1, v2) => {
  return v1 + v2;
};
console.log(soma(10, 5));

const add = (n) => n + 10; // Quando não tem as "{}" não precisa utilizar o return.
console.log(add(10));
