// Função que retorna uma Promise
function promessaSimples() {
  return new Promise((resolve, reject) => {
    const sucesso = true; // Simula uma operação bem-sucedida

    if (sucesso) {
      resolve("Operação bem-sucedida!"); // Chamando resolve em caso de sucesso
    } else {
      reject("Houve um erro!"); // Chamando reject em caso de erro
    }
  });
}

// Usando a Promise
promessaSimples()
  .then((resultado) => {
    console.log(resultado); // Exibe: Operação bem-sucedida!
  })
  .catch((erro) => {
    console.log(erro); // Este bloco não será executado neste exemplo
  })
  .finally(() => {
    console.log("Fim da Promise");
  });
