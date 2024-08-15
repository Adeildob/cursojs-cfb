//DOM - método getElementByClassName

// const cursosTodos = document.getElementsByClassName("curso");
// console.log(cursosTodos); //retorna uma HTMLCollection

//Para retornar um array utiliza-se o spread
const cursosTodos = [...document.getElementsByClassName("curso")];
const cursosC1 = [...document.getElementsByClassName("c1")];
const cursosC2 = [...document.getElementsByClassName("c2")];
const cursosEspecial = document.getElementsByClassName("curso")[6];

console.log(cursosTodos); //retorna um Array
console.log(cursosC1); //retorna um Array
console.log(cursosC2); //retorna um Array
console.log(cursosEspecial); //retorna o elemento na posição indicada na linha 10

cursosC2.map((el) => {
  el.classList.add("destaque");
});
