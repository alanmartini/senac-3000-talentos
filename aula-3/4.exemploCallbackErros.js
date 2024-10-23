function obterDadosUsuario(userId, callback) {
  console.log("Obtendo dados do usuário...");
  setTimeout(() => {
    const erro = null; // Simule um erro alterando para um objeto de erro, se necessário
    if (erro) {
      return callback(erro); // Chama o callback com o erro se ocorrer
    }

    const usuario = { id: userId, nome: "João" }; // Simula um usuário obtido de uma API
    console.log("Dados do usuário obtidos:", usuario);
    callback(null, usuario); // Passa null como erro e os dados do usuário
  }, 1000);
}

function obterEndereco(usuario, callback) {
  console.log("Obtendo endereço para o usuário", usuario.nome);
  setTimeout(() => {
    const erro = null; // Simule um erro alterando para um objeto de erro, se necessário
    if (erro) {
      return callback(erro); // Chama o callback com o erro se ocorrer
    }

    const endereco = { rua: "Av. Brasil", numero: 1000 }; // Simula um endereço
    console.log("Endereço obtido:", endereco);
    callback(null, endereco); // Passa null como erro e os dados do endereço
  }, 1000);
}

function mostrarDetalhes(usuario, endereco) {
  console.log(`Detalhes do usuário: ${usuario.nome}`);
  console.log(`Endereço: ${endereco.rua}, ${endereco.numero}`);
}

// Início do fluxo
console.log("Iniciando o processo...");
obterDadosUsuario(1, (erro, usuario) => {
  if (erro) {
    return console.error("Erro ao obter dados do usuário:", erro);
  }

  obterEndereco(usuario, (erro, endereco) => {
    if (erro) {
      return console.error("Erro ao obter endereço:", erro);
    }

    mostrarDetalhes(usuario, endereco);
  });
});

console.log("Processo iniciado, aguardando resultados...");
