// Aprendendo trabalhar com módulos em Javascript #P3

// import { cursos, getTodosCursos } from "./cursos3.js";
import getTodosCursos, { getCurso } from "./cursos3.js";
// import { cursos as c, getCurso as gc } from "./cursos3.js";

import * as m_cursos from "./cursos3.js"; // Pega tudo que está sendo exportado do módulo

console.log(m_cursos.cursos);
console.log(m_cursos.getCurso(0));
console.log(m_cursos.default());
