/*
Função MAP - vai iterar toda a coleção sem opção de parada
Texto selecionado + ALT seta para cima ou ALT seta para cima para deslocar texto para cima ou para baixo
CTRL + ; - Comentar/Descomentar
*/

// const el = document.getElementsByTagName("div");
// console.log(el);

// const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React"];
// cursos.map((elemento, index) => {
//   console.log("Curso: " + elemento + " - Posição do curso: " + index);
// });

// let el = document.getElementsByTagName("div");
// el = [...el];
// console.log(el);
// el.map((e, i) => {
//   e.innerHTML = "CFB Cursos";
// });

// const el1 = document.getElementsByTagName("div");
// const val = Array.prototype.map.call(el1, ({ innerHTML }) => innerHTML); //{ innerHTML } --> propriedade do elemento
// console.log(val);

const converterInt = (e) => parseInt(e);
const dobrar = (e) => e * 2;
//let num = ["1", "2", "3", "4", "5"].map(converterInt);
let num = ["1", "2", "3", "4", "5"].map(dobrar);
console.log(num);
