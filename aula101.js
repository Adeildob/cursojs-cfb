//Funções para manipulação de STRING em Javascript #P1

// let nome = "Bruno";
let nome = new String("Bruno Pinho Campos"); //Objeto String
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
