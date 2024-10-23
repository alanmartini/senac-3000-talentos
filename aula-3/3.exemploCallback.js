function obterDadosUsuario(userId, callback) {
  console.log("Obtendo dados do usuário...");
  setTimeout(() => {
    const usuario = { id: userId, nome: "João" }; // Simula um usuário obtido de uma API
    console.log("Dados do usuário obtidos:", usuario);
    callback(usuario); // Passa os dados do usuário para o próximo callback
  }, 1000);
}

function obterEndereco(usuario, callback) {
  console.log("Obtendo endereço para o usuário", usuario.nome);
  setTimeout(() => {
    const endereco = { rua: "Av. Brasil", numero: 1000 }; // Simula um endereço
    console.log("Endereço obtido:", endereco);
    callback(endereco); // Passa o endereço para o próximo callback
  }, 1000);
}

function mostrarDetalhes(usuario, endereco) {
  console.log(`Detalhes do usuário: ${usuario.nome}`);
  console.log(`Endereço: ${endereco.rua}, ${endereco.numero}`);
}

// Início do fluxo
console.log("Iniciando o processo...");
obterDadosUsuario(1, (usuario) => {
  obterEndereco(usuario, (endereco) => {
    mostrarDetalhes(usuario, endereco);
  });
});

console.log("Processo iniciado, aguardando resultados...");
