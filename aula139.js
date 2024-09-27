// Criando caixa de mensagem personalizada em Javascript #P4

import { Cxmsg } from "./cxmsg.js";

//Definir configuração
const config = {
  cor: "#48f",
  tipo: "ok", //Tipos: ok, sn,
  textos: ["SIM", "NÃO"],
  comando_sn: () => {},
};

const fsim = () => {
  console.log("Botão SIM pressionado");
};

const btn_mostrarcxmsg = document.querySelector("#btn_mostrarcxmsg");
const btn_mostrarcxmsg2 = document.querySelector("#btn_mostrarcxmsg2");
const btn_mostrarcxmsg3 = document.querySelector("#btn_mostrarcxmsg3");

btn_mostrarcxmsg.addEventListener("click", () => {
  config.tipo = "ok";
  Cxmsg.mostrar(config, "CFB Cursos", "Curso de Javascript");
});

btn_mostrarcxmsg2.addEventListener("click", () => {
  config.tipo = "sn";
  config.comando_sn = () => {
    fsim();
  };
  Cxmsg.mostrar(config, "Youtube", "Canal com cursos de programação");
});

btn_mostrarcxmsg3.addEventListener("click", () => {
  config.tipo = "sn";
  config.textos = ["OK", "CANCELA"];
  config.comando_sn = () => {};
  Cxmsg.mostrar(config, "Javascript", "Aula 139");
});
