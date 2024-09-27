//Funções para manipulação de STRING em Javascript #P4 - a partir de ES6

let nome = new String("Bruno Pinho Campos");

console.log(nome.startsWith("Pinho")); //Para qualquer parcela da string (letras ou palavras)

console.log(nome.endsWith("Campos"));

console.log(nome.includes("nh"));

console.log(nome.concat("\n").repeat(4));
console.log(nome.valueOf());

console.log(nome.charCodeAt(0));
console.log(nome.charCodeAt(1));
console.log(nome.charCodeAt(2));
console.log(nome.charCodeAt(3));
console.log(nome.charCodeAt(4));

console.log(String.fromCodePoint(66, 114, 117, 110, 111));

let nome_ts = "Bruno";
console.log(`Nome: ${nome_ts}`);
