//Aprendendo sobre FETCH para consumo de APIs em Javascript #P4

const p_temp = document.getElementById("p_temp");
const p_nivel = document.getElementById("p_nivel");
const p_press = document.getElementById("p_press");
const btn_texto = document.getElementById("btn_texto");

const obterDados = () => {
  const endpoint = "http://127.0.0.1:1880/cfbcursos";
  fetch(endpoint) //padrão é get
    .then((res) => res.json())
    .then((dados) => {
      console.log(dados);
      p_temp.innerHTML = "Temperatura: " + dados.temperatura;
      p_nivel.innerHTML = "Nível: " + dados.nivel;
      p_press.innerHTML = "Pressão: " + dados.pressao;
    });
};

let intervalo = setInterval(obterDados, 3000);

let dados = {
  nome: "Bruno",
  canal: "CFBCursos",
  curso: "Javascript",
};

let cabecalho = {
  method: "POST",
  body: JSON.stringify(dados),
};

const gravarDados = () => {
  const endpoint = "http://127.0.0.1:1880/gravar";
  fetch(endpoint, cabecalho)
    .then((res) => res.json())
    .then((ret) => {
      console.log(ret);
    });
};

btn_texto.addEventListener("click", (evt) => {
  gravarDados();
});
