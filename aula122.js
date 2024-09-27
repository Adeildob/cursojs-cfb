//Aprendendo sobre FETCH para consumo de APIs em Javascript #P1 - Curso de Javascript

const endpoint =
  "https://f8288435-d9af-4873-8ece-de850e1b9f7a-00-nuw5dowoz6hd.kirk.replit.dev/";
fetch(endpoint)
  .then((res) => res.json())
  .then((dados) => {
    console.log(dados);
  });
