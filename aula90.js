// Aprendendo sobre Objetos Literais em Javascript #P1
const objetos = document.getElementById("objetos");

//Pode ser com const ou let
const computador = {
  cpu: "i9",
  ram: "64gb",
  hd: "2tb",

  info: function () {
    console.log(`CPU:${this.cpu}`);
    console.log(`RAM:${this.ram}`);
    console.log(`HD:${this.hd}`);
  },
};

//Acrescentar propriedades
computador["monitor"] = "22pol";
computador.placaVideo = "rtx";
console.log(computador.monitor);
console.log(computador["monitor"]);

const computadores = [
  {
    cpu: "i9",
    ram: "64gb",
    hd: "2tb",
  },
  {
    cpu: "i7",
    ram: "32gb",
    hd: "2tb",
  },
  {
    cpu: "i5",
    ram: "16gb",
    hd: "1tb",
  },
];

console.log(computador);
computador.info();

console.log(computadores);
// objetos.innerHTML = computador.cpu + "-" + computador.ram + "-" + computador.hd;
// objetos.innerHTML = JSON.stringify(computador);
// objetos.innerHTML = JSON.stringify(computadores);

computadores.forEach((c) => {
  console.log(c);
  const div = document.createElement("div");
  div.innerHTML = c.cpu + "<br/>" + c.ram + "</br>" + c.hd;
  div.setAttribute("class", "computador");
  objetos.appendChild(div);
});
