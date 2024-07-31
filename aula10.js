let num = 110;

res = num % 2;

if (res == 0) {
  console.log("Par");
} else {
  console.log("Impar");
}

console.log(res == 0 ? "Par" : "Impar");

// Operador Ternário ( ? : )
console.log(num % 2 ? "Impar" : "Par");
console.log(!(num % 2) ? "Par" : "Impar");

// Arrow Function
let soma = (num1, num2) => num1 + num2;
console.log(soma(20, 76));
