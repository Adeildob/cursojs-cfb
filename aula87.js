//Como navegar no Histórico e Redirecionamento de Página em Javascript
const url = document.getElementById("url");
const btn_url = document.getElementById("btn_url");

btn_url.addEventListener("click", (evt) => {
  // window.location = "https://google.com.br";
  // window.location.assign("https://google.com.br"); //Não deleta a url corrente do histórico
  // window.location.replace("https://google.com.br"); //Deleta a url corrente do histórico
  // window.location.reload(); //Recarrega a página
  // window.history.back();
  // window.history.forward();
  // window.history.go(1); //navega para páginas anteriores -1, -2... e para pastas posteriores 1, 2 ...
  // console.log(window.history.length);
  // console.log(url.value);
  window.location = url.value;
});
