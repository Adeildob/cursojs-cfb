/*
Operadores aritméticos no Javascript
+ --> adição
- --> subtração
/ --> divisão
* --> multiplicação
% --> resto
++ --> incremento 
-- --> decremento
+= --> variação de incremento
-= --> variação de decremento
*/

/* Formas de declaração e inicialização de variáveis

let num1=0;
let num2=0;

let num3,num4;
num3=num4=10;

*/

let num1 = 5,
  num2 = 12;
res = 0;

//  A precedência no exemplor abaixo é do operador.
// res = num1 + num2 * 2;

//Na linha abaixo, a precedência é do que estiver entre parênteses
res = (num1 + num2) * 2;

console.log(res);
console.log(num2 - num1);

res = num2 / num1;
console.log(res);

res = num2 % num1;
console.log(res);

num1++;
num1++;
num2--;
num2--;
console.log(num1, num2);

num1 += 2;
num2 -= 3;
console.log(num1, num2);

num1 *= 2;
num2 *= 3;
console.log(num1, num2);

num1 /= 2;
num2 /= 3;
console.log(num1, num2);
