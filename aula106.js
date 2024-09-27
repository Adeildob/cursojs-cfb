//RegEx Expressões Regulares em Javascript #P2
let nome = new String("Brunoooooooooooooo Pinho Campossssssssss 1978");
let email = new String("bruno@bruno.com.br");
let numeros = "1, 10,100,1000";

console.log(nome);

console.log(nome.search(/pinho/i)); //  modificador RegEx "i", que ignora a utilização do case sensitive

console.log(nome.match(/O/gi)); //  modificador RegEx "g" e "i", que indica a obtenção global e não apenas do primeiro e ignora a utilização do case sensitive

console.log(nome.replace(/o/gi, "Teste")); //RegEx "i", que ignora a utilização do case sensitive

console.log(nome.match(/[oh]/gi)); //RegEx "[]", pega todas as ocorrências de forma global indicadas entre os colchetes, sem considerar o case sensitive

console.log(nome.match(/[a-m|0-9]/gi)); //Retorna itens no intervalos de a-m e 0-9

// Metacarateres
console.log(nome.match(/\d/gi)); // números
console.log(nome.match(/\s/gi)); // espaços
console.log(nome.match(/\bP/gi)); //DWORD

// Quantificadores
console.log(numeros);
console.log(nome.match(/o+|s+/gi)); // agrupa por strings
console.log(nome.match(/no*/gi)); // agrupa por strings
console.log(numeros.match(/10/gi));
console.log(numeros.match(/10+/gi));
console.log(numeros.match(/10?/gi));
