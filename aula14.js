let colocacao = 6;

switch (colocacao) {
  case 1:
    console.log("Primeiro lugar!");
    break;
  case 2:
    console.log("Segundo lugar!");
    break;
  case 3:
    console.log("Terceiro lugar!");
    break;
  case 4:
  case 5:
  case 6:
    console.log("Prêmio de Consolação!");
    break;
  default:
    console.log("Fora do pódio!");
}