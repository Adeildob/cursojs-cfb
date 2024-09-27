// Criando caixa de mensagem personalizada em Javascript #P4

import { Cxmsg } from "./cxmsg.js";

//Definir configuração
const config = {
  cor: "#48f",
};

//Aplica configuração
Cxmsg.config(config);

const btn_mostrarcxmsg = document.querySelector("#btn_mostrarcxmsg");
const btn_mostrarcxmsg2 = document.querySelector("#btn_mostrarcxmsg2");
const btn_mostrarcxmsg3 = document.querySelector("#btn_mostrarcxmsg3");

btn_mostrarcxmsg.addEventListener("click", () => {
  Cxmsg.mostrar("CFB Cursos", "Curso de Javascript");
});

btn_mostrarcxmsg2.addEventListener("click", () => {
  Cxmsg.mostrar("Youtube", "Canal com cursos de programação");
});

btn_mostrarcxmsg3.addEventListener("click", () => {
  Cxmsg.mostrar("Javascript", "Aula 138");
});
