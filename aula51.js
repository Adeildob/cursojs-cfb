// ITERADORES e elementos iteráveis em Javascript
/* Coleções:
      Arrays
      Strings
      Map
      Sets
*/

const valores = [10, 8, 9, 2];
const it_valores = valores[Symbol.iterator]();

const texto = "Youtube";
const it_texto = texto[Symbol.iterator]();

console.log(valores);
console.log(it_valores);
console.log(it_valores.next()); //retorna o valor atual do arrays e se chegou no final (retorna o value e done = true ou false

console.log(it_valores.next().value);
console.log(it_valores.next().value);
console.log(it_valores.next().value);
console.log(it_valores.next().value);
console.log(it_valores.next().value);

console.log(texto);
console.log(it_texto);
console.log(it_texto.next());
console.log(it_texto.next().value);
console.log(it_texto.next().value);
console.log(it_texto.next().value);
console.log(it_texto.next().value);
console.log(it_texto.next().value);
console.log(it_texto.next().value);
console.log(it_texto.next().value);
