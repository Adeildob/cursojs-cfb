// Criando um DataGridView em Javascript #P2 - Curso de Javascript - Aula 153

// const endpoint = "produtos.json";

// fetch(endpoint)
//   .then((res) => res.json())
//   .then((res) => {
//     console.log(res);
//   });

const configdgv = {
  endpoint: "produtos.json",
};

const dgv = (configdgv) => {
  fetch(configdgv.endpoint)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
};
