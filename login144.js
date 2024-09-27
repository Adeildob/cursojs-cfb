class Login {
  static logado = false;
  static matlogado = null;
  static nomelogado = null;
  static acessologado = null;
  static endpoint =
    "https://4b2488c0-2084-4139-8e1e-a8f741b3cabf-00-h6125op4gwcr.worf.replit.dev/";
  // https://4b2488c0-2084-4139-8e1e-a8f741b3cabf-00-h6125op4gwcr.worf.replit.dev//?matricula=123&senha=321

  static login = (mat, pas) => {
    this.endpoint += `?matricula=${mat}&senha=${pas}`;
    fetch(this.endpoint)
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          this.logado = true;
          this.matlogado = mat;
          this.nomelogado = res.nome;
          this.acessologado = res.acesso;
          console.log(res);
        } else {
          console.log("Usuário não encontrado");
        }
      });
  };
}

export { Login };
