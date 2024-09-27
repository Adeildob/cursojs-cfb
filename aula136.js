// Criando caixa de mensagem personalizada em Javascript #P2 e #P3

const config = {
  // titulo: "CBF Cursos",
  // texto: "Curso de Javascript, criando caixa de mensagem personalizada",
  cor: "#48f",
};

const cxmsg = new Cxmsg(config);

const btn_mostrarcxmsg = document.querySelector("#btn_mostrarcxmsg");
const btn_mostrarcxmsg2 = document.querySelector("#btn_mostrarcxmsg2");
const btn_mostrarcxmsg3 = document.querySelector("#btn_mostrarcxmsg3");

btn_mostrarcxmsg.addEventListener("click", (evt) => {
  cxmsg.mostrar("CFB Cursos", "Curso de Javascript");
});

btn_mostrarcxmsg2.addEventListener("click", (evt) => {
  cxmsg.mostrar("Youtube", "Canal com cursos de programação");
});

btn_mostrarcxmsg3.addEventListener("click", (evt) => {
  cxmsg.mostrar("Javascript", "Aula 136");
});
