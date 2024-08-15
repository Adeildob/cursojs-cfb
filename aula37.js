//Parando a propagação de evento com o método stopPropagation

const caixa1 = document.querySelector("#caixa1");
const btn_c1 = document.querySelector("#c1");
const cursos = [...document.querySelectorAll(".curso")];

caixa1.addEventListener("click", (evt) => {
  console.log("Clicou");
});

// btn_c1.addEventListener("click", (evt) => {
//   evt.stopPropagation();
//   console.log(evt.target);
// });

//StopPropagation
cursos.map((el) => {
  el.addEventListener("click", (evt) => {
    evt.stopPropagation();
  });
});
