//Operações Bitwise
let n1 = 10;
let n2 = 11;

let res = n1 & n2; // operação & no bit a bit, conserva os bits 1, apenas onde tem equivalência

console.log(res);

let res2 = n1 | n2; // operação || no bit a bit, conserva os bits 1, independente de onde tenha equivalência

console.log(res2);

let res3 = n1 ^ n2; // operação ^(XOR), conserva os bits 1, quando não há equivalência

console.log(res3);

let res4 = n1 >> 1; // Deslocamento de 1 bit para direita

console.log(res4);

let res5 = n1 << 1; // Deslocamento de 1 bit para esquerda

console.log(res5);
