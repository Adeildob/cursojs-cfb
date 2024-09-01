//Membro Static em Javascript - Possível invocar um método definido como Static sem que tenha instanciado a classe
// Quando declarado um membro como static ele pertence a classe e não ao objeto instanciado pela classe

class Npc {
  static alerta = false;
  constructor(energia) {
    this.energia = energia;
    // this.alerta = false;
  }
  info = function () {
    console.log(`Energia: ${this.energia}`);
    //console.log(`Alerta: ${this.alerta ? "Sim" : "Não"}`);
    console.log(`Alerta: ${Npc.alerta ? "Sim" : "Não"}`);
    console.log(`------------------------------------`);
  };

  static alertar = function () {
    Npc.alerta = true;
  };
}

const npc1 = new Npc(100);
const npc2 = new Npc(80);
const npc3 = new Npc(30);

Npc.alertar();
// Npc.alerta = true;
//npc1.alerta = true;

npc1.info();
npc2.info();
npc3.info();
