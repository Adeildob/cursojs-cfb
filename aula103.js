//Funções para manipulação de STRING em Javascript #P3

// let nome = "Bruno";
let nome = new String("Bruno Pinho Campos"); //Objeto String
let nome2 = new String("Bruno Pinho"); //Objeto String
let canal = new String("CFBCursos");

console.log(typeof nome);
console.log(nome);

console.log(nome.charAt(0)); //retorna a letra da posição indicada
console.log(nome.charAt(1));

console.log(nome.charCodeAt(0)); //retorna o código da letra da posição indicada

// nome = nome.concat(canal); // Para atualizar o valor da variável nome
console.log(nome.concat(canal));

console.log(nome.indexOf("no")); // retorna a posição do primeiro caracter da sentença repassada na string analisada
console.log(nome.indexOf("al")); // retorna -1 quando a sentença repassada não for localizada na string

console.log(nome.lastIndexOf("o")); // retorna a última posição do caracter na string

console.log(nome.localeCompare(nome2)); //0 - para strings iguais; 1 e -1 - para strings diferentes, sem um 1 quando a primeira string é maior e -1 quando a primeira string é menor

console.log(nome.replace("Pinho", "Teste")); //substitui o primeiro caracter localizado na string

console.log(nome.search("Pinho")); //Retorna a primeita posição da expressão

let sobrenome = nome.slice(6, 11); //Retorna uma parte da string da posição 6 a 11 da string original
console.log(sobrenome);

let arr_nome = nome.split(" ");
console.log(arr_nome);

let parte1 = nome.substring(0, 5); //vai até a posição 5, mas não inclui o caracter dessa posição
console.log(parte1);

let parte2 = nome.substring(6, 11);
console.log(parte2);

let parte3 = nome.substr(6, 5);
console.log(parte3);

console.log(nome.toLowerCase());
console.log(nome);
console.log(nome.toUpperCase());
console.log(nome);

console.log(nome.valueOf());

let num = 10;
num = num.toString();
console.log(typeof num);
