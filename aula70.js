//Projeto Calculadora #P1

const teclasNum = [...document.querySelectorAll(".num")];
const teclasOp = [...document.querySelectorAll(".op")];
const teclasRes = document.querySelector(".res");
const display = document.querySelector(".display");
const ton = document.getElementById("ton");
const tlimpar = document.getElementById("tlimpar");

teclasNum.forEach((el) => {
  el.addEventListener("click", (evt) => {
    sinal = false;
    display.innerHTML += evt.target.innerHTML;
  });
});

teclasOp.forEach((el) => {
  el.addEventListener("click", (evt) => {
    if (!sinal) {
      sinal = true;
      if (display.innerHTML == "0") {
        display.innerHTML = "";
      }
      if ((evt.target.innerHTML = "x")) {
        display.innerHTML += "*";
      } else {
        display.innerHTML += evt.target.innerHTML;
      }
    }
  });
});

tlimpar.addEventListener("click", (evt) => {
  display.innerHTML = "0";
});
