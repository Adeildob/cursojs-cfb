//Aprendendo sobre a função SYMBOL em Javascript #P1

const s1 = Symbol();
const s2 = Symbol();
const s3 = Symbol.for("Bruno"); //Criando um identificador Global para o Symbol - OBS: Cuidado, pois permite valor de identificador global repetido
const s4 = Symbol.for("Canal");

console.log(s1);
console.log(s2);

//Retorna false, pois são dois objetos diferentes
console.log(s1 === s2);
console.log(s3 === s4);

console.log(typeof s1);

console.log(Symbol.keyFor(s1));

console.log(Symbol.keyFor(s3)); //Trabalha apenas com quem ganhou identificador global
console.log(Symbol.keyFor(s4));
console.log(Symbol.keyFor(s1)); //Retorna undefined, pois não tem identificador Global definido
