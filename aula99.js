//Aprendendo sobre a função SYMBOL em Javascript #P2

class Jogador {
  constructor(nome) {
    this.nome = nome;
    this.id = Symbol();
  }
}

let jogadores = [
  new Jogador("j1"),
  new Jogador("j2"),
  new Jogador("j3"),
  new Jogador("j4"),
  new Jogador("j1"),
  new Jogador("j3"),
];

// let s1 = jogadores[2].id;
// jogadores = jogadores.filter((j) => {
//   return j.id != s1;
// });

let s_jogadores = jogadores.filter((j) => {
  return j.nome == "j1";
});

let s = s_jogadores.map((j) => {
  return j.id;
});

let jogadoresFiltrados = jogadores.filter((j) => {
  return !s.includes(j.id);
});

// jogadores = jogadores.filter((j) => {
//   return j.nome != "j1";
// });

console.log(jogadores); //Todos jogadores
// console.log(s1);
console.log(s_jogadores); //Todos jogadores "j1"
console.log(s); // Todos os symbol dos jogadores "j1"
console.log(jogadoresFiltrados); // Todos os jogadores do symbol dos jogadores "j1"
