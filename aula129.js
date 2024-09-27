//Usando Timestamp para criar um cronômetro super preciso #P1

const timer = document.querySelector("#timer");

const tmpini = Date.now(); //Timestamp Inicial

const contador = () => {
  const tmpatual = Date.now(); //Timestamp Atual
  let cont = tmpatual - tmpini;
  let seg = Math.floor(cont / 1000);
  console.log(seg);
};

setInterval(contador, 1000);
