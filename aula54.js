// Coleção MAP, diferente de MAP para percorrer os elementos de um Array

const caixa = document.querySelector("#caixa");

let mapa = new Map();

//Valores podem ser iguais, mas as chaves não podem *mapa.set(chave, valor)*
mapa.set("curso", "Javascript");
mapa.set(10, "CFB Cursos");
mapa.set(1, 100);
mapa.set("canal!", 100);

mapa.delete(10);

console.log(mapa);

let pes = "teste";
let res = "";

if (mapa.has(pes)) {
  res = "A chave existe na coleção com o valor: " + mapa.get(pes);
} else {
  res = "A chave não está na coleção.";
}

res += "</br> O tamanho da coleção é " + mapa.size;
caixa.innerHTML = res;

// caixa.innerHTML = mapa.get("curso");

mapa.forEach((el) => {
  console.log(el);
});
