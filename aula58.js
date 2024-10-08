// Entendendo sobre Objetos em Javascript

class Carro {
  canal = "CFB Cursos";
  constructor(pnome, ptipo) {
    this.nome = pnome;
    this.canal = "Youtube"; // como está no construtor, ao instanciar um novo objeto o valor inicial de canal será alterado
    if (ptipo == 1) {
      this.tipo = "Esportivo";
      this.velmax = 300;
    } else if (ptipo == 2) {
      this.tipo = "Utilitário";
      this.velmax = 100;
    } else if (ptipo == 3) {
      this.tipo = "Passeio";
      this.velmax = 160;
    } else {
      this.tipo = "Militar";
      this.velmax = 180;
    }
  }
  getNome() {
    return this.nome;
  }
  getTipo() {
    return this.tipo;
  }
  getVelmax() {
    return this.velmax;
  }
  getInfo() {
    return [this.nome, this.tipo, this.velmax]; //retornando as propriedades num Array
  }
  setNome(nome) {
    this.nome = nome;
  }
  setTipo(tipo) {
    this.tipo = tipo;
  }
  setVelmax(velmax) {
    this.velmax = velmax;
  }
  info() {
    console.log(`Nome. : ${this.nome}`);
    console.log(`Tipo. : ${this.tipo}`);
    console.log(`V.Max.: ${this.velmax}`);
    console.log(`Canal : ${this.canal}`);
    console.log("-------------------------");
  }
}

let c1 = new Carro("Rapidão", 1); // posso passar qualqur valor
let c2 = new Carro("Super Luxo", 2);
let c3 = new Carro("Bombadão", 4);
let c4 = new Carro("Carrego tudo", 3);

c1.info();
// c2.info();
// c3.info();
// c4.info();
console.log(c1.getNome());
console.log(c1.getInfo());
console.log(c1.getInfo()[1]);

c1.setNome("Super Veloz");
c1.setVelmax(500);
c1.info();
