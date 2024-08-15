//Função dentro de função - Funções aninhadas

const somar = (val) => {
  let res = 0;
  for (v of val) {
    res += v;
  }
  return res;
};

const soma = (...valores) => {
  /*
  const somar = (val) => {
    let res = 0;
    for (v of val) {
      res += v;
    }
    return res;
  };
  */
  return somar(valores);
};

console.log(soma(10, 90));

//No caso de termos o array, passamos por spread
valor = [10, 5, 15];
console.log(soma(...valor));
