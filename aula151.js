// Disponibilizando conteúdo via CDN #P2 - Módulo tela de login #P11 - Curso de Javascript - Aula 151

import { Cxmsg } from "./cxmsg.js";

const callback_ok = () => {};

const callback_naook = () => {
  const config = {
    cor: "#800",
    tipo: "ok",
    textos: null,
    comando_sn: () => {},
  };
  Cxmsg.mostrar(
    config,
    "Erro",
    "Login não efetuado! Usuário ou senha incorretos"
  );
};

const configlogin = {
  cor: "048",
  tipo: "./logoc.png",
  endpoint:
    "https://4b2488c0-2084-4139-8e1e-a8f741b3cabf-00-h6125op4gwcr.worf.replit.dev",
};

Login.login(callback_ok, callback_naook, configlogin);
