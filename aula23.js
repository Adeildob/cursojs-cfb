//Funcções com parâmetros REST utilizando o spread

//Com for tradicional
function soma(...valores) {
  let tam = valores.length;
  let res = 0;

  for (let i = 0; i < tam; i++) {
    res += valores[i];
  }
  return res;
}

console.log(soma(10, 5, 6));

//Com o for "of" - mais simples com array
function soma2(...valores) {
  let res = 0;

  for (let v of valores) {
    res += v;
  }
  return res;
}

console.log(soma2(10, 5, 6, 56, 67, 5.7));
