//RegEx Expressões Regulares em Javascript #P1
let nome = new String("Bruno Pinho Campos");

console.log(nome);

console.log(nome.search("pinho"));
console.log(nome.search(/pinho/i)); //  modificador RegEx "i", que ignora a utilização do case sensitive

console.log(nome.match("o"));
console.log(nome.match(/o/g)); //  modificador RegEx "g", que indica a obtenção global e não apenas do primeiro carater
console.log(nome.match(/O/gi)); //  modificador RegEx "g" e "i", que indica a obtenção global e não apenas do primeiro e ignora a utilização do case sensitive

console.log(nome.replace("pinho", "Teste")); //Não localiza, pois é case sensitive

console.log(nome.replace(/o/gi, "Teste")); //RegEx "i", que ignora a utilização do case sensitive
