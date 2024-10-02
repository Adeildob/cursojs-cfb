// Disponibilizando conteúdo via CDN #P1 - Módulo tela de login #P10 - Curso de Javascript - Aula 150

// import { Login } from "./login149.js";
import { Cxmsg } from "./cxmsg.js";

const callback_ok = () => {};

const callback_naook = () => {
  const config = {
    cor: "#800",
    tipo: "ok",
    textos: null,
    comando_sn: null,
  };
  Cxmsg.mostrar(
    config,
    "Erro",
    "Login não efetuado! Usuário ou senha incorretos"
  );
};

Login.login(callback_ok, callback_naook);
