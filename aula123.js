//Aprendendo sobre FETCH para consumo de APIs em Javascript #P2

const p_temp = document.getElementById("p_temp");
const p_nivel = document.getElementById("p_nivel");
const p_press = document.getElementById("p_press");

const obterDados = () => {
  const endpoint =
    "https://f8288435-d9af-4873-8ece-de850e1b9f7a-00-nuw5dowoz6hd.kirk.replit.dev/";
  fetch(endpoint)
    .then((res) => res.json())
    .then((dados) => {
      console.log(dados);
      p_temp.innerHTML = "Temperatura: " + dados.temperatura;
      p_nivel.innerHTML = "Nível: " + dados.nivel;
      p_press.innerHTML = "Pressão: " + dados.pressao;
    });
};

let intervalo = setInterval(obterDados, 3000);
