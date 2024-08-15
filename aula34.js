//Eventos no JavaScript
//Podem ser programados diretamente nas tags ou  nos arquivos js.

// function msgm() {
//   alert("Cliquei");
// }
// const c1=document.getElementById("c1")

// const c1 = document.querySelector("#c1"); // Elemento de id "c1"
const cursos = [...document.querySelectorAll(".curso")]; // Elemento de class "curso"

//Segunda versão com spread e map para todos os elementos
cursos.map((el) => {
  el.addEventListener("click", (evt) => {
    const el = evt.target;
    el.classList.add("destaque");
    // console.log(el.id + " foi clicado.");
    console.log(el.innerHTML + " foi clicado.");
  });
});

//Com função anônima Arrow Function
const msg = () => {
  alert("Clicou");
};

//Primeira versão
// c1.addEventListener("click", msg); //não é obrigado a colocar os parênteses, se tiver entrada de argumentos será tratdo de outra maneira
// c1.addEventListener("click", (evt) => {
//   const el = evt.target;
//   el.classList.add("destaque");
//   //   console.log(evt);
//   //   msg();
// });
