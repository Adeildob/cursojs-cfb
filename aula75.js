//Promise em Javascript

const nummero = document.getElementById("numero");

let promise = new Promise((resolve, reject) => {
  let resultado = false;
  let tempo = 3000;
  setTimeout(() => {
    if (resultado) {
      resolve("Deu tudo certo!");
    } else {
      reject("Deu tudo errado!");
    }
  }, tempo);
});

promise.then((retorno) => {
  numero.innerHTML = retorno;
  nummero.classList.remove("erro");
  nummero.classList.add("ok");
});
promise.catch((retorno) => {
  numero.innerHTML = retorno;
  nummero.classList.remove("ok");
  nummero.classList.add("erro");
});

numero.innerHTML = "Processando...";
