//Atividade Prática de Classes em Javascript #P1
const palco = document.getElementById("palco");
const num_objetos = document.getElementById("num_objetos");
const txt_qtde = document.getElementById("txt_qtde");
const btn_add = document.getElementById("btn_add");
const btn_remover = document.getElementById("btn_remover");

let larguraPalco = palco.offsetWidth;
let alturaPalco = palco.offsetHeight;
let bolas = [];
let numBola = 0;

class Bola {
  constructor(arrayBolas, palco) {
    this.tam = Math.floor(Math.random() * 15) + 10;
    this.r = Math.floor(Math.random() * 255);
    this.g = Math.floor(Math.random() * 255);
    this.b = Math.floor(Math.random() * 255);
    this.px = Math.floor(Math.random() * (larguraPalco - this.tam));
    this.py = Math.floor(Math.random() * (alturaPalco - this.tam));
    this.velx = Math.floor(Math.random() * 2) + 0.5;
    this.vely = Math.floor(Math.random() * 2) + 0.5;
    this.direx = Math.random() * 10 > 5 ? 1 : -1;
    this.direy = Math.random() * 10 > 5 ? 1 : -1;
    this.palco = palco;
    this.arrayBolas = arrayBolas;
    this.id = Date.now() + "_" + Math.floor(Math.random() * 100000000000000);
    this.desenhar();
    this.controle = setInterval(this.controlar, 10);
    this.eu = document.getElementById(this.id);
    numBola++;
    num_objetos.innerHTML = numBola;
  }

  minhaPos = () => {
    return this.arrayBolas.indexOf(this);
  };

  remover = () => {
    clearInterval(this.controle);
    bolas = bolas.filter((b) => {
      if (b.id != this.id) {
        return b;
      }
    });
    this.eu.remove();
    numBola--;
    num_objetos.innerHTML = numBola;
    txt_qtde.value = 0;
  };

  desenhar = () => {
    const div = document.createElement("div");
    div.setAttribute("id", this.id);
    div.setAttribute("class", "bola");
    div.setAttribute(
      "style",
      `left:${this.px}px;top:${this.py}px;width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.r},${this.g},${this.b})`
    );
    this.palco.appendChild(div);
    console.log(div);
  };

  controle_bordas = () => {
    if (this.px + this.tam >= larguraPalco) {
      this.direx = -1;
    } else if (this.px <= 0) {
      this.direx = 1;
    }
    if (this.py + this.tam >= alturaPalco) {
      this.direy = -1;
    } else if (this.py <= 0) {
      this.direy = 1;
    }
  };

  controlar = () => {
    this.controle_bordas();
    this.px += this.direx * this.velx;
    this.py += this.direy * this.vely;
    this.eu.setAttribute(
      "style",
      `left:${this.px}px;top:${this.py}px;width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.r},${this.g},${this.b})`
    );

    if (this.px > larguraPalco || this.py > alturaPalco) {
      this.remover();
    }
  };
}

window.addEventListener("resize", (evt) => {
  larguraPalco = palco.offsetWidth;
  alturaPalco = palco.offsetHeight;
});

btn_add.addEventListener("click", (evt) => {
  const qtde = txt_qtde.value;
  for (let i = 0; i < qtde; i++) {
    //Instanciar novas bolinhas
    bolas.push(new Bola(bolas, palco));
  }
  console.log(numBola);
});

btn_remover.addEventListener("click", (evt) => {
  bolas.map((b) => {
    //Remover a bolinha
    b.remover();
  });
});