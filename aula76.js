//Promise em Javascript

const nummero = document.getElementById("numero");
const btn_promessa = document.getElementById("btn_promessa");

btn_promessa.addEventListener("click", (evt) => {
  numero.innerHTML = "Processando...";
  console.log(promessa()); //apenas para mostrar no console o resultado da Promise
  // .then((retorno) => {
  //   numero.innerHTML = retorno;
  //   nummero.classList.remove("erro");
  //   nummero.classList.add("ok");
  // })
  // .catch((retorno) => {
  //   numero.innerHTML = retorno;
  //   nummero.classList.remove("ok");
  //   nummero.classList.add("erro");
  // });
});

const promessa = () => {
  let p = new Promise((resolve, reject) => {
    let resultado = false;
    let tempo = 3000;
    setTimeout(() => {
      if (resultado) {
        resolve("Deu tudo certo!");
        numero.innerHTML = "Deu tudo certo!";
        nummero.classList.remove("erro");
        nummero.classList.add("ok");
      } else {
        reject("Deu tudo errado!");
        numero.innerHTML = "Deu tudo errado!";
        nummero.classList.remove("ok");
        nummero.classList.add("erro");
      }
    }, tempo);
  });
  return p;
};

numero.innerHTML = "Esperando...";

// let promise = new Promise((resolve, reject) => {
//   let resultado = false;
//   let tempo = 3000;
//   setTimeout(() => {
//     if (resultado) {
//       resolve("Deu tudo certo!");
//     } else {
//       reject("Deu tudo errado!");
//     }
//   }, tempo);
// });

// promise.then((retorno) => {
//   numero.innerHTML = retorno;
//   nummero.classList.remove("erro");
//   nummero.classList.add("ok");
// });
// promise.catch((retorno) => {
//   numero.innerHTML = retorno;
//   nummero.classList.remove("ok");
//   nummero.classList.add("erro");
// });
