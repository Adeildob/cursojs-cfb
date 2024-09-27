const body = document.body;

const estilotopo =
  "display: flex;" +
  "justify-content: space-between;" +
  "align-items: center;" +
  "background-color: #00f;";

const topo = document.createElement("div");
topo.setAttribute("id", "topo");
topo.setAttribute("style", estilotopo);
body.prepend(topo);

const estilo_img_logo = "width: 100px;";
const logo =
  "<div id='logo' class='logo'>" +
  "<img src='logo2.png' title='CFBCursos' style='" +
  estilo_img_logo +
  "'/>" +
  "</div>";

topo.innerHTML += logo;

const login =
  "<div id='login' class='login'>" +
  "<p id='matricula'>Matrícula:<spam></spam></p>" +
  "<p id='nome'>Nome:<spam></spam></p>" +
  "</div>";
topo.innerHTML += login;
