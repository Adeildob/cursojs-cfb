//Manipulação de Data e Hora em Javascript

const div_data = document.getElementById("div_data");
const data = new Date();

// console.log(Date.now()); //Timestamp

// const dia = data.getDate() < 10 ? "0" + data.getDate() : data.getDate();
// const mes = data.getMonth() < 10 ? "0" + data.getMonth() : data.getMonth();
// const ano = data.getFullYear();

let dia = data.getDate();
dia = dia < 10 ? "0" + dia : dia;
let mes = data.getMonth();
mes = mes < 10 ? "0" + mes : mes;

const data_r = `${dia}/${mes}/${data.getFullYear()}`;
div_data.innerHTML = data_r;

console.log(data);
console.log(data.toString());
console.log(data.getTime());
console.log(`Dia: ${data.getDate()}`);
console.log(`Mês: ${data.getMonth()}`);
console.log(`Ano: ${data.getFullYear()}`);
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
