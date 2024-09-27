//Aprendendo trabalhar com módulos em Javascript #P4 - Classes

// import Cursos from "./cursos4.js";
// console.log(Cursos.getTodosCursos());

// Também funciona assim, em função do default
import c from "./cursos4.js";

c.addCurso("Photoshop");
console.log(c.getTodosCursos());
c.apagarCursos();
console.log(c.getTodosCursos());
