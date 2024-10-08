//Orientação Objeto - Herança Javascript

//Classe PAI
class Carro {
  constructor(nome, portas) {
    this.nome = nome;
    this.portas = portas;
    this.ligado = false;
    this.velocidade = 0;
    this.cor = undefined;
  }
  ligar = function () {
    this.ligado = true;
  };
  desligar = function () {
    this.ligado = false;
  };
  setCor = function (cor) {
    this.cor = cor;
  };
  setVelocidade = function (vel) {
    this.velocidade = vel;
  };
}

//Classe filho
class Militar extends Carro {
  constructor(nome, portas, blindagem, municao) {
    super(nome, portas);
    this.blindagem = blindagem;
    this.municao = municao;
    this.cor = "verde";
  }
  atirar = function () {
    if (this.municao > 0) {
      this.municao--;
    }
  };
}

class Utilitario extends Carro {
  constructor(nome, portas, lugares) {
    super(nome, portas);
    this.lugares = lugares;
  }
}

const c1 = new Carro("Normal", 4);
c1.ligar();
c1.setCor("Preto");
c1.setVelocidade(100);

const c2 = new Militar("Lutador", 1, 100, 50);
c2.setCor("Azul"); //Modificada a cor inicialmente definida no Construtor
c2.atirar();
c2.atirar();
c2.atirar();

const c3 = new Utilitario("Normal", 4);

console.log(`Nome: ${c1.nome}`);
console.log(`Portas: ${c1.portas}`);
console.log(`Ligado: ${c1.ligado}`);
console.log(`Velocidade: ${c1.velocidade}`);
console.log(`Cor: ${c1.cor}`);
console.log("------------------------------");

console.log(`Nome: ${c2.nome}`);
console.log(`Portas: ${c2.portas}`);
console.log(`Ligado: ${c2.ligado}`);
console.log(`Blindagem: ${c2.blindagem}`);
console.log(`Munição: ${c2.municao}`);
console.log(`Cor: ${c2.cor}`);
console.log("------------------------------");

console.log(`Nome: ${c2.nome}`);
console.log(`Portas: ${c2.portas}`);
console.log(`Ligado: ${c2.ligado}`);
console.log(`Velocidade: ${c2.velocidade}`);
console.log(`Cor: ${c2.cor}`);
console.log(`Lugares: ${c2.lugares}`);
console.log("------------------------------");
