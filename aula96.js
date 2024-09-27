//prendendo trabalhar com módulos em Javascript #P5 e #P6
import c from "./contatos.js";

const listaContatos = document.getElementById("listaContatos");
const btn_gravar = document.getElementById("btn_gravar");

btn_gravar.addEventListener("click", (evt) => {
  const cont = {
    nome: document.getElementById("f_nome").value,
    telefone: document.getElementById("f_telefone").value,
    email: document.getElementById("f_email").value,
  };

  c.addContato(cont, listaContatos);
  console.log(c.getTodosContatos());
});
