// Entendendo sobre Objetos em Javascript

class Pessoa {
  constructor(pnome, pidade) {
    this.nome = pnome;
    this.idade = pidade;
  }
  getNome() {
    return this.nome;
  }
  getIdade() {
    return this.idade;
  }

  setNome(nome) {
    this.nome = nome;
  }
  setIdade(idade) {
    this.tipo = idade;
  }

  info() {
    console.log(`Nome..: ${this.nome}`);
    console.log(`Idade.: ${this.idade}`);
    console.log("-------------------------");
  }
}

let pessoas = [];
const btn_add = document.querySelector("#btn_add"); // # pois é um id
const res = document.querySelector(".res"); // . pois é uma classe

const addPessoa = () => {
  res.innerHTML = "";
  pessoas.map((p) => {
    const div = document.createElement("div");
    div.setAttribute("class", "pessoa");
    div.innerHTML = `Nome.: ${p.getNome()} ,<br/>Idade:${p.getIdade()}`;
    res.appendChild(div);
  });
};

btn_add.addEventListener("click", (evt) => {
  nome = document.querySelector("#f_nome");
  idade = document.querySelector("#f_idade");
  const p = new Pessoa(nome.value, idade.value);
  pessoas.push(p);
  nome.value = "";
  idade.value = "";
  nome.focus();
  addPessoa(pessoas);
});
