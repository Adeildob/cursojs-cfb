//Aprendendo sobre a biblioteca MATH em Javascript

const mat = document.getElementById("mat");

//Gera um número aleatório entre 0 e 10
// mat.innerHTML = Math.random() * 10;

//Gera um número aleatório entre 0 e 9, pegando apenas a parte inteira
// const num = Math.random() * 10;
// mat.innerHTML = Math.floor(num);

//Gera um número aleatório entre 0 e 10, pegando apenas a parte inteira
// const num = Math.random() * 10;
// mat.innerHTML = Math.round(num);

//Gera a raiz quadrada de um número
const num = Math.round(Math.random() * 10);
mat.innerHTML = Math.sqrt(num);

//Gera potência de um número
mat.innerHTML = Math.pow(num, 2);
