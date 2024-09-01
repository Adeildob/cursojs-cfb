//Conversão de JSON e objetos literais em Javascript

const Pessoa = {
  nome: "Bruno",
  canal: "CFB Cursos",
  curso: "Javascript",
  aulas: {
    aula01: "Introdução",
    aula02: "Variáveis",
    aula03: "Condicional",
  },
};

const s_json_pessoa = JSON.stringify(Pessoa); //Conversão de Objeto literal para uma string  JSON
const o_json_pessoa = JSON.parse(s_json_pessoa); //Conversão de uma string JSON para um Objeto literal

console.log(Pessoa);
console.log(s_json_pessoa);
console.log(o_json_pessoa);
