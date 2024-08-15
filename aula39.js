//Entendendo relações do DOM

const caixa1 = document.querySelector("#caixa1");
const btn_c = [...document.querySelectorAll(".curso")];
const c1_2 = document.querySelector("#c1_2");

// console.log(caixa1.firstElementChild);
// console.log(caixa1.lastElementChild);
// console.log(caixa1.children);

console.log(caixa1.hasChildNodes()); //Retorna true se o elemento tiver filhos
console.log(btn_c[0].hasChildNodes());
console.log(btn_c[0].childNodes);

if (btn_c[0].children.length > 0) {
  console.log("Possui filhos.");
} else {
  console.log("Não possui filhos.");
}

if (caixa1.children.length > 0) {
  console.log("Possui filhos.");
} else {
  console.log("Não possui filhos.");
}

//Condição ternária - mesmo resulatdo da estrutura anterior
// console.log(
//   caixa1.children.length > 0 ? "Possui filhos." : "Não possui filhos."
// );

// console.log(
//   btn_c[0].children.length > 0 ? "Possui filhos." : "Não possui filhos."
// );

// console.log(caixa1.firstChild); // retorna o text
// console.log(caixa1.firstElementChild); // retorna a div

// console.log((caixa1.firstElementChild.innerHTML = "TESTE")); // retorna a div
//console.log((caixa1.children[1].innerHTML = "TESTE")); // retorna a div

console.log(c1_2); //Retorna o elemento
console.log(c1_2.parentElement); // Retorna o pai do elemento
console.log(c1_2.parentNode); // Retorna o pai do elemento também
console.log(c1_2.parentNode.parentNode); // Retorna o pai do pai elemento (avô)
console.log(c1_2.parentNode.parentNode.parentNode.children[4]); // Retorna o elemento da posição 4
