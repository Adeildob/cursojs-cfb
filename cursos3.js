const cursos = [
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

//1ª Opção - com Arrow Function
// const getTodosCursos = () => {
//   return cursos;
// };

// export { cursos };
// export default getTodosCursos;

//2ª Opção - com Function
export default function getTodosCursos() {
  return cursos;
}

function getCurso(i_curso) {
  return cursos[i_curso];
}

export { cursos, getCurso };
// export default getTodosCursos; // --> Alternativa para export default sem ser na função
