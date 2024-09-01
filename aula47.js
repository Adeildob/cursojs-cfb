//Método FIND para encontrar elementos em Arrays em Javascript - retorna o primeiro que for encontrado
const p_array = document.querySelector("#array");
const txt_pesquisar = document.querySelector("#txt_pesquisar");
const btnPesquisar = document.querySelector("#btnPesquisar");
const resultado = document.querySelector("#resultado");

//const elementos_array = [10, 5, 8, 2, 9, 15, 20];
const elementos_array = ["Java", "C++", "Html"];
p_array.innerHTML = "[" + elementos_array + "]";

btnPesquisar.addEventListener("click", (evt) => {
  resultado.innerHTML = "Valor não encontrado.";
  const ret = elementos_array.find((el, i) => {
    // if (el == txt_pesquisar.value) { // se usar === terá que converter o array numérico para texto
    if (el.toUpperCase() === txt_pesquisar.value.toUpperCase()) {
      resultado.innerHTML =
        "Valor pesquisado " + el + " está na posição " + i + " do array.";
      return el;
    }
  });
  console.log(ret);
});
