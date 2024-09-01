// Entendendo Objetos Literais em Javascript

// Função para criar um novo objeto Pessoa baseado no modelo fornecido
function criarPessoa(nome, idade) {
  return Object.assign({}, Pessoa, {
    nome: nome,
    idade: idade,
  });
}

// Objeto literal Pessoa
const Pessoa = {
  nome: "",
  idade: "",
  getNome: function () {
    return this.nome;
  },
  getIdade: function () {
    return this.idade;
  },
  setNome: function (nome) {
    this.nome = nome;
  },
  setIdade: function (idade) {
    this.idade = idade;
  },
};

let pessoas = [];
const btn_add = document.querySelector("#btn_add");
const res = document.querySelector(".res");

const addPessoa = () => {
  res.innerHTML = "";
  pessoas.forEach((p) => {
    const div = document.createElement("div");
    div.setAttribute("class", "pessoa");
    div.innerHTML = `Nome: ${p.getNome()} ,<br/>Idade: ${p.getIdade()}`;
    res.appendChild(div);
  });
  // pessoas.map((p) => {
  //   const div = document.createElement("div");
  //   div.setAttribute("class", "pessoa");
  //   div.innerHTML = `Nome.: ${p.getNome()} ,<br/>Idade:${p.getIdade()}`;
  //   res.appendChild(div);
  // });
};

btn_add.addEventListener("click", (evt) => {
  nome = document.querySelector("#f_nome").value;
  idade = document.querySelector("#f_idade").value;

  if (nome && idade) {
    // Cria um novo objeto Pessoa usando a função de fábrica
    const p = criarPessoa(nome, idade);
    pessoas.push(p);
    document.querySelector("#f_nome").value = "";
    document.querySelector("#f_idade").value = "";
    document.querySelector("#f_nome").focus();
    addPessoa();
  } else {
    alert("Por favor, preencha nome e idade.");
  }
  // const p = Pessoa(nome.value, idade.value);
  // pessoas.push(p);
  // nome.value = "";
  // idade.value = "";
  // nome.focus();
  // addPessoa(pessoas);
});
