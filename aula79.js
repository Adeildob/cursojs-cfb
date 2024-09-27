//Manipulação de Data e Hora, criando um relógio em Javascript - Parte 3

const div_data = document.getElementById("div_data");
const div_relogio = document.getElementById("div_relogio");
const btn_ativar = document.getElementById("btn_ativar");
const btn_parar = document.getElementById("btn_parar");
const tmp_alarme = document.getElementById("tmp_alarme");
const hora_alarme = document.getElementById("hora_alarme");
const timer = document.getElementById("timer");

const som_alarme = new Audio("alarme.mp3");
som_alarme.loop = 3; // valor -1 para ficar em loop - acabar e repetir

let ts_atual = null; //Timestamp atual
let ts_alarme = null; //Timestamp do alarme
let alarme_ativado = false;
let alarme_tocando = false;

const formatar_hora = (hora_nao_formatada) => {
  let hora = hora_nao_formatada.getHours();
  hora < 10 ? "0" + hora : hora;
  let minuto = hora_nao_formatada.getMinutes();
  minuto < 10 ? "0" + minuto : minuto;
  let segundo = hora_nao_formatada.getSeconds();
  segundo < 10 ? "0" + segundo : segundo;

  let hora_formatada = hora + ":" + minuto + ":" + segundo;
  return hora_formatada;
};

btn_ativar.addEventListener("click", () => {
  ts_atual = Date.now();
  ts_alarme = ts_atual + tmp_alarme.value * 1000;
  alarme_ativado = true;
  const dt_alarme = new Date(ts_alarme);
  let hora_alarme_formatada = formatar_hora(dt_alarme);
  hora_alarme.innerHTML = "Hora Alarme: " + hora_alarme_formatada;
});

btn_parar.addEventListener("click", () => {
  alarme_ativado = false;
  alarme_tocando = false;
  hora_alarme.innerHTML = "Hora do Alarme:";
  tmp_alarme.value = 0;
  timer.classList.remove("alarme");
  som_alarme.pause();
  som_alarme.currentTime = 0;
});

const data = new Date();

let dia = data.getDate();
dia = dia < 10 ? "0" + dia : dia;
let mes = data.getMonth();
mes = mes < 10 ? "0" + mes : mes;

const data_r = `${dia}/${mes}/${data.getFullYear()}`;
div_data.innerHTML = data_r;

const relogio = () => {
  const data = new Date();
  let hora = data.getHours();
  hora = hora < 10 ? "0" + hora : hora;
  let minutos = data.getMinutes();
  minutos = minutos < 10 ? "0" + minutos : minutos;
  let segundos = data.getSeconds();
  segundos = segundos < 10 ? "0" + segundos : segundos;
  const hora_completa = hora + ":" + minutos + ":" + segundos;
  div_relogio.innerHTML = hora_completa;
  if (alarme_ativado && !alarme_tocando) {
    if (data.getTime() >= ts_alarme) {
      alarme_tocando = true;
      som_alarme.play();
      timer.classList.add("alarme");
    }
  }
};

const intervalo = setInterval(relogio, 1000); //Chama função relogio() num intervalo de 1 segundo (1000 milisegundos)

/**
 * getDate() = Dia do mês
 * getDay() = Dia da Semana (número)
 * getFullyYear() = Ano com 4 dígitos
 * getHours() = Horas
 * getMilliseconds() = Milisegundos
 * getMinutes() = Minutos
 * getMonth() = Mês
 * getSeconds() = Segundos
 * getTime() = Timestamp (milisegundos desde de 1 de janeiro de 1970, 00:00:00 UTC)
 * Date.now() = Timestamp (milisegundos desde de 1 de janeiro de 1970, 00:00:00 UTC)
 * getTimezoneOffset() = Timezone da localidade
 * setDate() = Define um dia do mês para a data
 * setMonth() = Define um mês para a data
 * setFullYear() = Define um ano para a data
 * setHours() = Define horas
 * getMinutes() = Define Minutos
 * setSeconds() = Define Segundos
 * setMiliseconds() = Define Milisegundos
 * toDateString() = Retorna somente a data
 *
 * */
