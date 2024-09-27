class Cursos {
  static cursos = [
    "Javascript",
    "HTML",
    "CSS",
    "Arduino",
    "Raspberry",
    "C++",
    "Python",
    "Java",
    "C#",
  ];

  constructor() {} //Não utilizamos

  //Static para não precisar instanciar a classe
  static getTodosCursos = () => {
    return this.cursos;
  };

  static getCurso = (i_curso) => {
    return this.cursos[i_curso];
  };

  static addCurso = (novoCurso) => {
    this.cursos.push(novoCurso);
  };

  static apagarCursos = () => {
    this.cursos = [];
  };
}

export default Cursos;
