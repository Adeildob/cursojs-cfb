import { contatos } from "./bancoContatos.js";

let contato = {
  getTodosContatos: function () {
    return contatos;
  },

  getContato: function (index) {
    return contatos[index];
  },

  addContato: function (novoContato, destinhoDOM) {
    console.log(novoContato);
    // contatos.push(novoContato);

    // Faz o mesmo que o código comentado acima
    const cont = {
      nome: novoContato.nome,
      telefone: novoContato.telefone,
      email: novoContato.email,
    };
    contatos.push(cont);

    this.renderContatos(destinhoDOM);
  },

  removeContato: function (index, destinhoDOM) {
    console.log(index);
    console.log(destinhoDOM);
    // contatos.splice(index, 1);

    // Cria um novo array de contatos, excluindo o contato no índice fornecido
    const novo_contatos = contatos.filter((_, i) => i !== index);

    // Atualiza o array original com o novo array
    // Aqui estamos assumindo que você pode atribuir o novo array
    contatos.length = 0; // Limpa o array original

    this.renderContatos(destinhoDOM);
  },

  renderContatos: function (destinhoDOM) {
    destinhoDOM.innerHTML = "";

    contatos.forEach((c, index) => {
      const div = document.createElement("div");
      div.setAttribute("class", "contato");

      const p_nome = document.createElement("p");
      p_nome.innerHTML = c.nome;
      const p_telefone = document.createElement("p");
      p_telefone.innerHTML = c.telefone;
      const p_email = document.createElement("p");
      p_email.innerHTML = c.email;

      const removeButton = document.createElement("button");
      removeButton.innerHTML = "Excluir";

      removeButton.addEventListener("click", () => {
        this.removeContato(index, destinhoDOM);
      });

      div.appendChild(p_nome);
      div.appendChild(p_telefone);
      div.appendChild(p_email);
      div.appendChild(removeButton);
      destinhoDOM.appendChild(div);
    });
  },
};

export default contato;
