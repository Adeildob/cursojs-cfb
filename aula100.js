//Aprendendo sobre a função SYMBOL em Javascript #P3

const nome = Symbol("nome");
const numero = Symbol("numero");
const corUniforme = Symbol("cor do uniforme");

//Objeto literal
const Jogador = {
  nome: "j1", //notação de acesso direto
};

//Hide property (Propriedades escondidas)
Jogador[numero] = 10;
Jogador[corUniforme] = "amarelo";

// o for in não acesso as propriedade com notação de acesso direto
for (let p in Jogador) {
  console.log(p);
}

console.log(Jogador);
console.log(Jogador.nome);
console.log(Jogador[numero]);
console.log(Jogador[corUniforme]);
