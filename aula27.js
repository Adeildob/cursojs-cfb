//Funções Geradora (* ao lado de function e termo yield)
function* cores() {
  yield "Vermelho";
  yield "Verde";
  yield "Azul";
}

let itc = cores();
console.log(itc); // Primeira chamada retorna o object Generator
console.log(itc.next().value);
console.log(itc.next().value);
console.log(itc.next().value);
console.log(itc.next().value); // Retorna undefined, pois não tem mais nada para executar

function* perguntas() {
  const nome = yield `Qual seu nome?`;
  const esporte = yield `Qual o seu esporte favorito?`;
  return "Seu nome é " + nome + ", seu esporte favorito é " + esporte;
}

const itp = perguntas();
console.log(itp.next().value);
console.log(itp.next("Bruno").value);
console.log(itp.next("Natação").value);

function* contador() {
  let i = 0;
  while (true) {
    yield i++;
    if (i > 5) {
      break;
    }
  }
}

const itcont = contador();
//console.log(itcont.next().value);
//console.log(itcont.next().value);
//console.log(itcont.next().value);

for (let i = 0; i < 6; i++) {
  console.log(itcont.next().value);
}

const itcont2 = contador();
for (let c of itcont2) {
  console.log(c);
}
