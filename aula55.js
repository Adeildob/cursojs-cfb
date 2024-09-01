// Coleção SET - não permite entradas duplicadas de elementos, diferente do array que permite repetições

const caixa = document.querySelector("#caixa");

let musicas = new Set(["musica1", "musica boa", "musica 10"]); //podemos iniciar a coleção já no construtor

musicas.add("musica muito legal");
musicas.add("musica muito legal");
musicas.add("musica muito legal");
musicas.add("musica muito legal");
musicas.add("musica muito legal");
musicas.add("musica muito nordestina");
console.log(musicas);

musicas.delete("musica1"); //deleta um elemento
musicas.clear(); // limpar toda a coleção

// musicas.forEach((el) => {
//   caixa.innerHTML += el + "<br/>";
// });

for (let m of musicas) {
  caixa.innerHTML += m + "<br/>";
}
