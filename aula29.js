//Operador "this"

function aluno(nome, nota) {
  //let vnome = nome; --> mesmo resultado da próxima linha
  this.nome = nome;
  this.nota = nota;

  //   console.log(nome);
  //   console.log(nota);
  //Função anônima tradicional o this.nome e this.nota não funciona
  this.dados_anonimo = function () {
    setTimeout(function () {
      console.log(this.nome);
      console.log(this.nota);
    }, 2000);
  };

  //Arrow function enxerga o this.nome e this.nota da dunção pai (function aluno)
  this.dados_arrow = function () {
    setTimeout(() => {
      console.log(this.nome);
      console.log(this.nota);
    }, 2000);
  };
}

const al1 = new aluno("Bruno", 100);
al1.dados_anonimo();
al1.dados_arrow();
