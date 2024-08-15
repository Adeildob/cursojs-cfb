const caixa1 = document.querySelector("#caixa1");
const caixa2 = document.querySelector("#caixa2");
const btn_transferir = document.querySelector("#btn_transferir");
const todosCursos = [...document.querySelectorAll(".curso")]; // com spread para transformar num Array e não um HTMLCollection

//Utiliza o map para percorrer o Array inteiro
todosCursos.map((el) => {
  el.addEventListener("click", (evt) => {
    const curso = evt.target;
    curso.classList.toggle("selecionado"); //O toggle faz com que o elemento tenha "selecionado" ADICIONADO a class, se não existir, ou tenha "selecionado" REMOVIDO, caso exista
  });
});

btn_transferir.addEventListener("click", () => {
  const cursosSelecionados = [...document.querySelectorAll(".selecionado")];

  //console.log(cursosSelecionados);

  cursosSelecionados.map((el) => {
    caixa2.appendChild(el);
  });
});
